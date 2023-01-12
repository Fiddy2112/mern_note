import express from "express";
import http from "http";
import cors from "cors";
import bodyParse from "body-parser";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";

//fake data
import fakeData from "./fakeData/index.js";

const app = express();
const httpServer = http.createServer(app);

// type Query{
// hoat dong cho nhung truy van trong client ma muon truy van du lieu

// }

// type Mutation {
// hoat dong trong truong hop muon update hay xoa du lieu

// }

// type Subscription {
// hoat dong khi phia client update theo dang real-time

// }

const typeDefs = `#graphql
type Folder {
  id: String,
  name:String,
  createAt: String,
  author : Author
}

type Author {
  id:String,
  name:String
}

type Query{
  folders : [
    Folder
  ]
}

`;
const resolvers = {
  Query: {
    folders: () => {
      return fakeData.folders;
    },
  },
  Folder: {
    author: (parent, args, context, info) => {
      console.log({ parent, args });
      const authorId = parent.authorId;
      return fakeData.authors.find((author) => author.id === authorId);
    },
  },
};

//GraphQL
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

//De su dung await ben ngoai 1 function
//thi doi file ben ngoai thanh index.mjs
await server.start();

app.use(cors(), bodyParse.json(), expressMiddleware(server));

await new Promise((resolve) => httpServer.listen({ port: 5000 }, resolve));
console.log("🚀 Server ready at port 5000");

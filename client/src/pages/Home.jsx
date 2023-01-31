import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Img } from "../assets";
import { AuthContext } from "../context/AuthProvider";
import { getAuth, signOut } from "firebase/auth";
import { Outlet, useNavigate } from "react-router-dom";
import UserHome from "../components/UserHome";
import Folders from "../components/Folders";

const HomeContainer = styled.div`
  width: 100%;
`;
const Banner = styled.h1`
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 400;
`;

const Bottom = styled.div`
  height: 80vh;
  box-shadow: 0 0 15px 0 rgb(193 193 193 / 60%);
  display: flex;
`;

const Left = styled.div`
  background-color: #2d3436;
  flex: 1;
  border-radius: 10px 0px 0px 10px;
`;

const Right = styled.div`
  background-color: blue;
  flex: 3;
  border-radius: 0px 10px 10px 0px;
`;

function Home() {
  // const auth = getAuth();

  // const navigate = useNavigate();

  // const { user } = useContext(AuthContext);
  // console.log("user home", user);
  // // const { displayName, photoURL } = user;
  // // console.log(displayName, photoURL);

  // const handleLogout = () => {
  //   signOut(auth);
  //   navigate("/login");
  // };

  return (
    <HomeContainer>
      <Banner>Welcome to Note App</Banner>
      <UserHome />
      <Bottom>
        <Left>
          <Folders
            folders={[
              { id: "1", name: "Text" },
              { id: "2", name: "Number" },
              { id: "3", name: "This is a heading" },
            ]}
          />
        </Left>
        <Right>
          <Outlet />
        </Right>
      </Bottom>
    </HomeContainer>
  );
}

export default Home;

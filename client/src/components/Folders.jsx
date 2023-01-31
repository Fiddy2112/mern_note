import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "./Card";

const FolderList = styled.div``;

function Folders({ folders }) {
  return (
    <FolderList>
      {folders.map(({ id, name }) => (
        <Link key={id} to={`/folders/${id}`} style={{ textDecoration: "none" }}>
          <Card>{name}</Card>
        </Link>
      ))}
    </FolderList>
  );
}

export default Folders;

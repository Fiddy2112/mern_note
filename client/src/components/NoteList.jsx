import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "./Card";

const NoteContainer = styled.div`
  display: flex;
  height: 100%;
`;

const NoteLeft = styled.div`
  flex: 1;
  background-color: Pink;
`;

const List = styled.div``;

const NoteRight = styled.div`
  flex: 2;
`;

function NoteList() {
  const folders = { notes: [{ id: "1", content: "wdwbdywbdyuwduwu" }] };
  return (
    <NoteContainer>
      <NoteLeft>
        <List>
          {folders.notes.map(({ id, content }) => (
            <Link key={id} to={`note/${id}`} style={{ textDecoration: "none" }}>
              <Card>{content}</Card>
            </Link>
          ))}
        </List>
      </NoteLeft>
      <NoteRight>Right</NoteRight>
    </NoteContainer>
  );
}

export default NoteList;

import { getAuth, signOut } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthProvider";

const HomeWrapper = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
const Name = styled.span`
  padding: 0px 5px;
  font-size: 15px;
  font-weight: 400;
`;
const Modal = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
`;
const Link = styled.a`
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  color: #535c68;
  background-color: #fff;
  border: 1px solid #535c68;
  //   margin-bottom: 10px;
  &:hover {
    background-color: #535c68;
    color: #fff;
  }
`;

function UserHome() {
  const [modal, setModal] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  console.log("user home", user);
  // const { displayName, photoURL } = user;
  // console.log(displayName, photoURL);

  const handleLogout = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <HomeWrapper>
      <Top>
        <Nav onClick={() => setModal(!modal)}>
          <Avatar src={user?.photoURL} />
          <Name>{user?.displayName}</Name>
        </Nav>
      </Top>
      {modal && (
        <Modal>
          <Link onClick={handleLogout}>Logout</Link>
        </Modal>
      )}
    </HomeWrapper>
  );
}

export default UserHome;

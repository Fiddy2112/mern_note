import React from "react";
import styled from "styled-components";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 20px;
  font-weight: 500;

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`;
const Button = styled.button`
  margin: auto;
  padding: 8px 10px;
  font-size: 15px;
  font-weight: 500;
  border: 0.5px solid #eb4d4b;
  outline: none;
  background-color: #fff;
  color: #eb4d4b;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #eb4d4b;
  }
`;

function Login() {
  const auth = getAuth();

  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();

    const res = await signInWithPopup(auth, provider);
    console.log(res);
  };
  return (
    <LoginContainer>
      <Title>Welcome to Note App</Title>
      <Button onClick={handleGoogle}>Login with Google</Button>
    </LoginContainer>
  );
}

export default Login;

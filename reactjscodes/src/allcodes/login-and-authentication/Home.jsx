import React from "react";
import LoginHOC from "./LoginHOC";
const Home = (props) => {
  console.log(props);
  return (
    <>
      <h2>Home</h2>
      <button
        onClick={() => {
          props.setFlag(false);
          localStorage.removeItem("Login");
        }}
      >
        LogOut
      </button>
    </>
  );
};

export default LoginHOC(Home);

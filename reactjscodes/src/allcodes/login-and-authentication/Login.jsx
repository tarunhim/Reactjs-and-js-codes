import React from "react";

const Login = ({ setFlag }) => {
  return (
    <>
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <button
        onClick={() => {
          localStorage.setItem("Login", JSON.stringify("True"));
          setFlag(true);
        }}
      >
        submit
      </button>
    </>
  );
};
export default Login;

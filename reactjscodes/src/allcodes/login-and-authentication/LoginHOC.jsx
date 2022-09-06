import React, { useEffect } from "react";
import Login from "./Login";

const LoginHOC = (Comp) => {
  const Helper = ({ flag, setFlag }) => {
    // console.log(props);
    useEffect(() => {
      if (localStorage.getItem("Login")) setFlag(true);
      else setFlag(false);
    }, [flag,setFlag]);
    return (
      <>{flag ? <Comp setFlag={setFlag} /> : <Login setFlag={setFlag} />}</>
    );
  };
  return Helper;
};
export default LoginHOC;

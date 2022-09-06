import { useState } from "react";
import context from "./context";

const Provider = (props) => {
  const [flag, setFlag] = useState(true);
  return (
    <context.Provider
      value={{
        flag: flag,
        setFlag: setFlag
      }}
    >
      {props.children}
    </context.Provider>
  );
};
export default Provider;

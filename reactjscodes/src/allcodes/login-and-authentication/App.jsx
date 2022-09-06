import React from "react";
import Home from "./Home";
const App = () => {
  const [flag, setFlag] = React.useState(false);
  return (
    <>
      <Home flag={flag} setFlag={setFlag} />
    </>
  );
};
export default App;
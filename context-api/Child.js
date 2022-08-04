import ctx from "./context";

const Child = () => {
  return (
    <ctx.Consumer>
      {(context) => <>{context.flag && <h1>Child</h1>}</>}
    </ctx.Consumer>
  );
};
export default Child;

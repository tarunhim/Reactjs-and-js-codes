import Child from "./Child";
import context from "./context";
import Provider from "./provider";

const App = () => {
  return (
    <Provider>
      <context.Consumer>
        {(context) => (
          <button onClick={() => context.setFlag((prev) => !prev)}>
            toggle
          </button>
        )}
      </context.Consumer>
      <Child />
    </Provider>
  );
};
export default App;

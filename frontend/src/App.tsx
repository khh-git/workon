import { Fragment } from "react";
import { NavBar, Title } from "@components";

const App = () => {
  return (
    <Fragment>
      <header className="w-full p-4">
        <NavBar>
          <Title />
        </NavBar>
      </header>

      <main></main>

      <footer></footer>
    </Fragment>
  );
};

export default App;

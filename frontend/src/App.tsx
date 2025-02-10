import { Fragment } from "react";
import { NavBar, NavMenu, Title } from "@components";

const App = () => {
  return (
    <Fragment>
      <header className="box-border w-full px-8 py-4">
        <NavBar>
          <Title />
          <NavMenu />
        </NavBar>
      </header>

      <main></main>

      <footer></footer>
    </Fragment>
  );
};

export default App;

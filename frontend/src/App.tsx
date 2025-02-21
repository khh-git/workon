import { Fragment } from "react";
import { NavBar, SupportMenu, Title, Views } from "@components";

const App = () => {
  return (
    <Fragment>
      <header className="box-border w-full px-8 py-3">
        <NavBar>
          <Title />
          <Views />
          <SupportMenu />
        </NavBar>
      </header>

      <main></main>

      <footer></footer>
    </Fragment>
  );
};

export default App;

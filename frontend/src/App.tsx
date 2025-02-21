import { Fragment } from "react";
import { NavBar, SupportMenu, Title, Views } from "@components";

const App = () => {
  return (
    <Fragment>
      <header className="box-border w-full px-2 py-2 md:px-6">
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

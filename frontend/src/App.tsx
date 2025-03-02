import { NavBar, SupportMenu, Title, WorkSpace, Views } from "@components";

const App = () => {
  return (
    <div className="h-lvh">
      <header className="box-border w-full px-2 py-2 md:px-6">
        <NavBar>
          <Title />
          <Views />
          <SupportMenu />
        </NavBar>
      </header>

      <main className="box-border w-full px-2 py-2 md:px-6">
        <WorkSpace />
      </main>

      <footer></footer>
    </div>
  );
};

export default App;

import { NavBar, SupportMenu, Title, WorkSpace, Views } from "@components";
import { Login } from "@pages";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>WorkOn</div>} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/workspace"
        element={
          <div className="h-dvh flex flex-col">
            <header className="box-border w-full px-2 py-2 md:px-6">
              <NavBar>
                <Title titleStyle="text-base font-bold text-gray-600" />
                <Views />
                <SupportMenu />
              </NavBar>
            </header>

            <main className="box-border w-full px-2 py-2 md:px-6 h-full grow-1">
              <WorkSpace />
            </main>

            <footer></footer>
          </div>
        }
      />
    </Routes>
  );
};

export default App;

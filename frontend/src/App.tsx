import { Navigate, Route, Routes } from "react-router";
import { GetIn, Join, WorkSpace } from "@pages";
import { Box, Layout, Loader, PrivateRoute } from "@components";
import { useContext } from "react";
import { AuthContext } from "@contexts/AuthContext";
import { EStatus } from "@typelib/contexts";

const App = () => {
  const { isLoggedIn, loginStatus } = useContext(AuthContext);

  return loginStatus !== EStatus.None ? (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/workspace" replace />} />
        <Route path="/getin" element={<GetIn />} />
        <Route path="/join" element={<Join />} />
        <Route
          element={
            <PrivateRoute isAuthenticated={isLoggedIn} altRoute="getin" />
          }
        >
          <Route
            index
            path="workspace"
            element={
              <Box style="h-dvh flex flex-col">
                <WorkSpace />
              </Box>
            }
          />
        </Route>
      </Routes>
    </Layout>
  ) : (
    <Loader style="w-10 h-10 animate-spin absolute top-1/2 left-1/2 -translate-1/2" />
  );
};

export default App;

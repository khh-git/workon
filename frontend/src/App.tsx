import { Route, Routes } from "react-router";
import { GetIn, Join, WorkSpace } from "@pages";
import { Box, TextField } from "@components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TextField text="WorkOn" />} />
      <Route path="/getin" element={<GetIn />} />
      <Route path="/join" element={<Join />} />
      <Route
        path="/workspace"
        element={
          <Box style="h-dvh flex flex-col">
            <WorkSpace />
          </Box>
        }
      />
    </Routes>
  );
};

export default App;

import { createRoot } from "react-dom/client";
// import { ContextProvider } from "@components";
import AppProvider from "@contexts/AppProvider";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);

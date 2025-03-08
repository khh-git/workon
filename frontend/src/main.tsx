import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@redux/store";
import AppContextProvider from "@contexts/AppContextProvider";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </Provider>
);

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { store } from "@redux/store";
import AppContextProvider from "@contexts/AppContextProvider";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <AppContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContextProvider>
  </Provider>
);

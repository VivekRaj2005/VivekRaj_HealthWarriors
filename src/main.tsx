import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Router.tsx";
import { store } from "./Data/Store";
import { Provider } from "react-redux";
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Router />
  </Provider>
);

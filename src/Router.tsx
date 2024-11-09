import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

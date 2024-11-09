import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import { useState } from "react";

function Router() {
    const [LoggedIn, setLoggedIn] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home loggedIn={LoggedIn} setloggedIn={setLoggedIn} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

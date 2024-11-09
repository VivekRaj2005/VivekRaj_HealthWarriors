import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import PatientHome from "./Components/Dashboard/Home";
import { useState } from "react";
import Patient from "./Page/Patient";

function Router() {
  const [LoggedIn, setLoggedIn] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<Home loggedIn={LoggedIn} setloggedIn={setLoggedIn} />}
        />

        <Route path="/patient" element={<Patient />}>
          <Route index element={<PatientHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

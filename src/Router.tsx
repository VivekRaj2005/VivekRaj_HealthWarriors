import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import PatientHome from "./Components/Dashboard/Home";
import { useState } from "react";
import Patient from "./Page/Patient";
import Records from "./Components/Dashboard/Records";
import Appointment from "./Components/Dashboard/Appointment";
import NewRecord from "./Components/Dashboard/NewRecord";
import Terms from "./Page/Terms";

function Router() {
  const [LoggedIn, setLoggedIn] = useState<boolean>(false);
  const [userData, setUserData] = useState<any | null>(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<Home loggedIn={LoggedIn} setloggedIn={setLoggedIn} setUserData={setUserData}  />}
        />
        <Route path="/terms" element={<Terms />} />

        <Route path="/patient" element={<Patient user={userData} />}>
          <Route index element={<PatientHome />} />
          <Route path="/patient/records" element={<Records />} />
          <Route path="/patient/appointment" element={<Appointment />} />
          <Route path="/patient/new" element={<NewRecord />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

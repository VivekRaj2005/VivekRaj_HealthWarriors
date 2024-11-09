import { useState } from "react";
import NavBar from "./Navbar";
import RecordsTable from "./RecordsTable";
import ViewRecord from "./ViewRecord";

function Records() {
  const [record, setRecord] = useState<number | null>(null);
  return (
    <>
      <NavBar />
      {!record ? (
        <RecordsTable setRecord={setRecord} />
      ) : (
        <ViewRecord record={record} setRecord={setRecord} />
      )}
    </>
  );
}

export default Records;

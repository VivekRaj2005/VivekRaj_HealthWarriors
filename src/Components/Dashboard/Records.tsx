import { useEffect, useState } from "react";
import NavBar from "./Navbar";
import RecordsTable from "./RecordsTable";
import ViewRecord from "./ViewRecord";
import { useOutletContext } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import firebase from "../../Service/firebase";
import { CircularProgress } from "@mui/material";

function Records() {
  const [record, setRecord] = useState<any | null>(null);
  const [Records, setRecords] = useState<any[] | null>(null);
  const user: any = useOutletContext();
  useEffect(() => {
    getDocs(collection(firebase.store, "Records")).then((docs) => {
      const newRecords: any[] = [];
      docs.forEach((doc) => {
        const data = doc.data();
        if (data.Aadhar === user.user.Aadhar) {
          newRecords.push(Object.assign({}, data, { id: doc.id }));
        }
      });
      setRecords(newRecords);
    });
  });
  return (
    <>
      <NavBar />
      {Records ? (
        <>
          {!record ? (
            <RecordsTable setRecord={setRecord} Records={Records} />
          ) : (
            <ViewRecord record={record} setRecord={setRecord} />
          )}
        </>
      ) : (
        <div className="flex h-[65vh] w-full items-center justify-center">
          <CircularProgress size={100} />
        </div>
      )}
    </>
  );
}

export default Records;

import NavBar from "./Navbar";
import Contents from "./Contents";
import { useOutletContext } from "react-router-dom";

function Home() {
  const user = useOutletContext();
  return (
    <>
      <NavBar />
      <Contents user={user} />
    </>
  );
}

export default Home;

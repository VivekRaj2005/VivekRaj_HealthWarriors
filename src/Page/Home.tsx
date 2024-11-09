// import Chat from "../Components/Dashboard/Chat";
import Footer from "../Components/Footer";
import Login from "../Components/Login";
import Navbar from "../Components/Navbar";

function Home({
  loggedIn,
  setloggedIn,
  setUserData,
}: {
  loggedIn: boolean;
  setloggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUserData: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <>
      <Navbar />
      <Login
        loggedIn={loggedIn}
        setloggedIn={setloggedIn}
        setUserData={setUserData}
      />
      <Footer />
      {/* <Chat /> */}
    </>
  );
}

export default Home;

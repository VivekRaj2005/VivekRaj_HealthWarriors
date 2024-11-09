import Footer from "../Components/Footer";
import Login from "../Components/Login";
import Navbar from "../Components/Navbar";

function Home({
    loggedIn,
    setloggedIn,
  }: {
      loggedIn: boolean;
      setloggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    }) {
  return (
    <>
      <Navbar />
      <Login loggedIn={loggedIn} setloggedIn={setloggedIn}/>
      <Footer />
    </>
  );
}

export default Home;

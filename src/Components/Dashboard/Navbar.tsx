import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-8 flex items-center">
        {/* <!-- logo --> */}
        <div className="mr-auto md:w-48 flex-shrink-0 flex">
          <img className="h-8 md:h-10" src={Logo} alt="" />
          <h4 className="flex flex-col justify-center font-bold">
            Health Warriors
          </h4>
        </div>

        {/* <!-- search --> */}
        <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
          <select
            className="bg-transparent uppercase font-bold text-sm p-4 mr-4"
            name=""
            id=""
            onChange={(e) => {
              navigate("/patient" + e.target.value);
            }}
          >
            <option value={""}>Home</option>
            <option value={"/records"}>Records</option>
            <option value={"/appointment"}>Fix Appointment</option>
          </select>
          <input
            className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4 w-full "
            type="text"
            placeholder="I'm searching for ..."
          />
          <svg
            className="ml-auto h-5 px-4 text-gray-500 svg-inline--fa fa-search fa-w-16 fa-9x"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
            ></path>
          </svg>
        </div>

        {/* <!-- phone number --> */}
        <div className="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
          <span className="font-bold md:text-xl">+91 7012060999</span>
          <span className="font-semibold text-sm text-gray-400">
            Support 24/7
          </span>
        </div>

        {/* <!-- buttons --> */}

        <nav className="contents">
          <ul className="ml-4 xl:w-48 flex items-center justify-end">
            <li className="ml-2 lg:ml-4 relative inline-block">
              <Link to={"/"}>
                <i className="bi bi-power text-red-700 text-bolder"></i>
              </Link>
            </li>
          </ul>
        </nav>

        {/* <!-- cart count --> */}
        <div className="ml-4 hidden sm:flex flex-col font-bold">
          <span className="text-xs text-gray-400">Vivek Raj</span>
          <span>2586-8321-3066</span>
        </div>
      </div>

      <hr />
    </header>
  );
}

export default Navbar;

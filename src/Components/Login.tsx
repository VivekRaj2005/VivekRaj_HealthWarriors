import { useEffect, useState } from "react";
import "./Login.css";
import { Alert, CircularProgress } from "@mui/material";
import { sleep } from "../Utils/Time";
import { doc, getDoc } from "firebase/firestore";
import firebase from "../Service/firebase";

function Login({
  loggedIn,
  setloggedIn,
}: {
  loggedIn: boolean;
  setloggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [Aadhar, setAadhar] = useState<string>("");
  const [OTPMode, setOTPMode] = useState<boolean>(false);
  const [otpRandom, setOtpRandom] = useState<string | null>(null);
  const [Loading, setLoading] = useState<boolean>(false);
  const [firebaseDoc, setFirebaseDoc] = useState<any>(null);
  const [LoadingFail, setLoadingFail] = useState<boolean>(false);
  const [OTP, setOTP] = useState<string>("");

  function sendOTP() {
    setLoading(true);
    getDoc(doc(firebase.store, "ID", Aadhar)).then((doc) => {
        console.log(doc.exists())
      if (!doc.exists()) {
        setLoading(false);
        setLoadingFail(true);
      } else {
        const docData = doc.data();
        const otp = Math.floor(Math.random() * 10000).toString();
        setFirebaseDoc(doc.data());
        setOtpRandom(otp);

        const Data: any = {
          name: docData.Name,
          email: docData.Email,
          otp: otp,
        };

        var form_data = new FormData();

        for (var key in Data) {
          form_data.append(key, Data[key]);
        }

        fetch(
          "https://script.google.com/macros/s/AKfycbwbRlijjYlbKbgxji_JOr3HS3QnThOvsqdjMMffkbwvRcuYUuEBNu6Q3n01srK1GQ-m/exec",
          {
            method: "POST",
            body: form_data,
            mode: "no-cors",
          }
        ).then(() => {
          setOTPMode(true);
          setLoading(false);
        });
      }
    });
  }

  useEffect(() => {
    if (loggedIn) {
    }
  });

  function login() {
    setLoading(true);
    sleep(5000).then(() => {
      setLoading(false);
      if (OTP === "12345") {
        setLoadingFail(false);
      } else {
        setLoadingFail(true);
      }
    });
  }

  return (
    <section className="text-black body-font px-0 lg:px-10">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-black title">
            Connecting Rural Communities to Urban Healthcare Expertise
          </h1>
          <p className="leading-relaxed mt-4 desc">
            Sign in to Health Warrior to bridge the healthcare gap. Our platform
            connects rural patients and communities with experienced urban
            doctors, offering timely medical advice, support, and resources.
            Together, let's create a healthier future for all.
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-indigo-800 bg-opacity-80 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 h-[430px] login justify-center">
          <div>
            <h2 className="text-white text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            {LoadingFail ? (
              <Alert severity="error" className="mb-5">
                Invalid Login
              </Alert>
            ) : (
              <></>
            )}
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-400"
              >
                Aadhar Card Number
              </label>
              <input
                value={Aadhar}
                onChange={(e) => {
                  if (Number(e.target.value)) setAadhar(e.target.value);
                }}
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-purple-900 rounded border border-gray-600 focus:border-purple-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {OTPMode && (
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-400"
                >
                  OTP
                </label>
                <input
                  type="password"
                  id="email"
                  name="email"
                  value={OTP}
                  onChange={(event) => {
                    setOTP(event.target.value);
                  }}
                  className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-purple-900 rounded border border-gray-600 focus:border-purple-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            )}
            <button
              className="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg w-full"
              onClick={sendOTP}
            >
              {!Loading ? (
                OTPMode ? (
                  "Send OTP"
                ) : (
                  "Login"
                )
              ) : (
                <CircularProgress size={30} style={{ color: "white" }} />
              )}
            </button>
            <p className="text-xs mt-3 text-gray-400">
              By clicking Login, you automatically agree to our{" "}
              <a style={{ textDecoration: "underline" }}>
                Terms and Conditions
              </a>{" "}
              of the software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;

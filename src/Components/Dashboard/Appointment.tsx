import Navbar from "./Navbar";
import DrRajesh from "../../assets/Dr Rajesh.jpeg";
import DrLwanya from "../../assets/Lawanya.jpg";
import DrAbin from "../../assets/DRABIN J JOHNS.jpg";
import DrSharvari from "../../assets/Sharvari.jpg";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Swal from "sweetalert2";

function Appointment() {
  const context: any = useOutletContext();
  const [appointment, setAppointment] = useState(false);

  function Appontment(doctor: string) {
    Swal.fire({
      title: "Confirm Booking",
      text: "Are you sure that you want to confirm booking under: " + doctor,
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm it!",
    }).then((result) => {
      if (!result.isConfirmed) return;
      const Data: any = {
        name: context.user.Name,
        email: context.user.Email,
        doctor,
        drEmail: "23110362@iitgn.ac.in",
        aadhar: context.user.Aadhar,
      };
      var form_data = new FormData();

      for (var key in Data) {
        form_data.append(key, Data[key]);
      }

      fetch(
        "https://script.google.com/macros/s/AKfycbyUSj-QyqhxyJ2mXbSHpgWgtj4z7D75eaWWuHNEXrHeH9Lv-a0AE1FUCROStnGTrtKpQA/exec",
        {
          method: "POST",
          body: form_data,
          mode: "no-cors",
        }
      ).then(() => setAppointment(true));
    });
  }

  return (
    <>
      <Navbar />
      {appointment ? (
        <section className="h-[60vh] w-full flex justify-center items-center flex-col">
          <i className="bi bi-cloud-check-fill text-[300px] text-green-500 h-[350px]"></i>
          <h5 className="text-5xl">Successfully Completed</h5>
        </section>
      ) : (
        <section className="text-gray-600 body-font px-0 lg:px-10">
          <div className="container px-5 pb-24 pt-5 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest uppercase">
                Doctors
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Please choose your doctor for your next appointment. The system
                will process the next suitable date for you meeting.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/2">
                <div
                  className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left border-dotted border-[5px] p-2 cursor-pointer hover:border-solid hover:border-indigo-700 transition-all duration-300 cursor-pointer hover:border-solid hover:border-indigo-700 transition-all duration-300"
                  onClick={() => Appontment("Dr. Sharvari Mirge")}
                >
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={DrSharvari}
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900 ">
                      Dr. Sharvari Mirge
                    </h2>
                    <h3 className="text-gray-500 mb-3">General Physician</h3>
                    <p className="mb-4">
                      Dr. Sharvari Mirge is a dedicated general physician, known
                      for her compassionate approach and expertise in primary
                      healthcare.
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div
                  className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left border-dotted border-[5px] p-2 cursor-pointer hover:border-solid hover:border-indigo-700 transition-all duration-300"
                  onClick={() => Appontment("Dr. Rajesh Nair")}
                >
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={DrRajesh}
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Dr. Rajesh Nair
                    </h2>
                    <h3 className="text-gray-500 mb-3">General Physician</h3>
                    <p className="mb-4">
                      Dr Rajesh Nair is our Senior Consultant Physician in the
                      department of Internal Medicine. He has been practicing
                      for more than 25yrs
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div
                  className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left border-dotted border-[5px] p-2 cursor-pointer hover:border-solid hover:border-indigo-700 transition-all duration-300"
                  onClick={() => Appontment("Dr. Abin J Johns")}
                >
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={DrAbin}
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Dr. Abin J Johns
                    </h2>
                    <h3 className="text-gray-500 mb-3">Physiotherapy</h3>
                    <p className="mb-4">
                      Dr. Abin J Johns is a committed healthcare professional
                      known for his expertise and compassionate care.
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div
                  className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left border-dotted border-[5px] p-2 cursor-pointer hover:border-solid hover:border-indigo-700 transition-all duration-300"
                  onClick={() => Appontment("Dr. Lawanya")}
                >
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={DrLwanya}
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Dr. Lawanya
                    </h2>
                    <h3 className="text-gray-500 mb-3">Diabetologist</h3>
                    <p className="mb-4">
                      Dr. Lawanya is a skilled diabetologist, specializing in
                      the management and treatment of diabetes.
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Appointment;

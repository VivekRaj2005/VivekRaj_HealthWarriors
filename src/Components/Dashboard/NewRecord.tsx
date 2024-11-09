import Navbar from "./Navbar";

function NewRecord() {
  return (
    <>
      <Navbar />
      <div className="lg:w-2/3 w-full mx-auto overflow-auto">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Patient Records
            </h1>
          </div>
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Lab Test
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Value
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Referance
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3">
                  <select className="w-full p-2">
                    <option value={"FBS"}>FBS</option>
                    <option value={"LDL"}>LDL</option>
                    <option value={"HDL"}>HDL</option>
                    <option value={"Na"}>Sodium</option>
                    <option value={"K"}>Pottasium</option>
                  </select>
                </td>
                <td className="px-4 py-3 flex">
                  <input type="text" className="w-full p-2 mr-5" />{" "}
                  <p className="py-2">mEq/L</p>
                </td>
                <td className="px-4 py-3">130mg/dL</td>
              </tr>
            </tbody>
          </table>
          <div className="flex pl-4 mt-4 w-full mx-auto">
            <button className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded mr-5">
              <i className="bi bi-plus-circle mr-5"></i>
              New Column
            </button>
            <button className="flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded mr-5">
              <i className="bi bi-check-lg mr-5 text-[17px]"></i>
              Apply
            </button>
            <button className="flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
              <i className="bi bi-x-octagon-fill mr-5"></i>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewRecord;

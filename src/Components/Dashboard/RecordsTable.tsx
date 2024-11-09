import React from "react";

function RecordsTable({
  setRecord,
}: {
  setRecord: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Patient Records
          </h1>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Record Number
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Date
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Laboratory
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Data
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3">#09112024001</td>
                <td className="px-4 py-3">09 December 2024</td>
                <td className="px-4 py-3">Lifeline Clinic and Laboratories</td>
                <td className="px-4 py-3 text-gray-900">
                  <a
                    href="#"
                    className="color-blue"
                    style={{ textDecoration: "underline" }}
                    onClick={(event) => {
                      event.preventDefault();
                    }}
                  >
                    View Data
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">#09112024001</td>
                <td className="px-4 py-3">09 December 2024</td>
                <td className="px-4 py-3">Lifeline Clinic and Laboratories</td>
                <td className="px-4 py-3 text-gray-900">
                  <a
                    href="#"
                    className="color-blue"
                    style={{ textDecoration: "underline" }}
                    onClick={(event) => {
                      event.preventDefault();
                    }}
                  >
                    View Data
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">#09112024001</td>
                <td className="px-4 py-3">09 December 2024</td>
                <td className="px-4 py-3">Lifeline Clinic and Laboratories</td>
                <td className="px-4 py-3 text-gray-900">
                  <a
                    href="#"
                    className="color-blue"
                    style={{ textDecoration: "underline" }}
                    onClick={(event) => {
                      event.preventDefault();
                      setRecord(91120240001);
                    }}
                  >
                    View Data
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">#09112024001</td>
                <td className="px-4 py-3">09 December 2024</td>
                <td className="px-4 py-3">Lifeline Clinic and Laboratories</td>
                <td className="px-4 py-3 text-gray-900">
                  <a
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                    }}
                    className="color-blue"
                    style={{ textDecoration: "underline" }}
                  >
                    View Data
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            <i className="bi bi-plus-circle mr-5"></i>
            Add New
          </button>
        </div>
      </div>
    </section>
  );
}

export default RecordsTable;

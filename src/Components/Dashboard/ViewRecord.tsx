function ViewRecord(props: { record: any; setRecord: Function }) {
  console.log(props.record.Data);
  return (
    <section className="py-1 bg-blueGray-50">
      <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">
                  Viewing Record: {props.record.id}
                </h3>
              </div>
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <button
                  className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => props.setRecord(null)}
                >
                  Back
                </button>
              </div>
            </div>
          </div>

          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Test Name
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Test Value
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Referance Value
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Variation
                  </th>
                </tr>
              </thead>

              <tbody>
                {props.record.Data.map((data: any, key: number) => {
                  return (
                    <tr key={key}>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        {data.Name}
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        {data.Value}
                      </td>
                      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {data.HR ? (
                          data.LR ? (
                            <>
                              {data.LR} - {data.HR}
                            </>
                          ) : (
                            <>&lt;{data.HR}</>
                          )
                        ) : (
                          <>&gt;{data.LR}</>
                        )}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <i
                          className={`fas fa-arrow-up text-${
                            data.HR
                              ? data.LR
                                ? data.Value < data.HR && data.Value > data.LR
                                  ? "green"
                                  : "red"
                                : data.Value < data.HR
                                ? "green"
                                : "red"
                              : data.Value > data.LR
                              ? "green"
                              : "red"
                          }-500 mr-4`}
                        ></i>
                        {data.HR
                          ? data.LR
                            ? data.Value < data.HR && data.Value > data.LR
                              ? "Good"
                              : "Poor"
                            : data.Value < data.HR
                            ? "Good"
                            : "Poor"
                          : data.Value > data.LR
                          ? "Good"
                          : "Poor"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ViewRecord;

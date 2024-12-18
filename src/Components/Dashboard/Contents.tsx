import userPng from "../../assets/User.png";

function Contents(user: any) {
  const myuser = user.user.user;
  return (
    <>
      <section className="text-gray-600 body-font px-0 lg:px-10 ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded h-[425px]"
              alt="hero"
              src={userPng}
            />
          </div>
          <section className="text-gray-400 bg-gray-900 body-font overflow-hidden w-full h-full">
            <div className="container px-5 py-10 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap lg:flex-row flex-col-reverse">
                <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 ">
                  <h2 className="text-lg title-font text-gray-500 tracking-widest">
                    ACCOUNT CENTER
                  </h2>
                  <h1 className="text-white text-5xl title-font font-medium mb-4 w-full">
                    {myuser.Name}
                  </h1>
                  <div className="flex border-t border-gray-800 py-2">
                    <span className="text-gray-500">Phone Number</span>
                    <span className="ml-auto text-white">{myuser.Phone}</span>
                  </div>
                  <div className="flex border-t border-gray-800 py-2">
                    <span className="text-gray-500">Email</span>
                    <span className="ml-auto text-white">{myuser.Email}</span>
                  </div>
                  <div className="flex border-t border-gray-800 py-2">
                    <span className="text-gray-500">Residency</span>
                    <span className="ml-auto text-white">
                      {myuser.Residance}
                    </span>
                  </div>
                  <div className="flex border-t border-gray-800 py-2">
                    <span className="text-gray-500">DOB</span>
                    <span className="ml-auto text-white">{myuser.DOB}</span>
                  </div>
                  <div className="flex border-t border-gray-800 py-2">
                    <span className="text-gray-500">Gender</span>
                    <span className="ml-auto text-white">{myuser.Gender}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Contents;

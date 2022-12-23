import React from "react";

const Home = () => {
  return (
    <>
      <div class="flex flex-col mx-auto my-32 ml-20  items-center bg-white border border-2 shadow-md rounded-md max-w-[400px] items-center  md:flex-row md:max-w-[850px]">
        <img
          class="object-fill rounded-t-l-md md:rounded-l-md md:h-60 md:w-50  lg:h-32 md:h-auto lg:w-48 "
          src="https://media.istockphoto.com/id/1415886888/photo/freshly-painted-craftsman-bungalow-house.jpg?b=1&s=170667a&w=0&k=20&c=lWGj1yZBmuZ-FB7401-NraD_tvhE36hw_zF363hsXAY="
          alt=""
        />
        <div className="hidden lg:hidden md:flex flex-col h-[240px] w-[500px] border-r-2 space-y-4">
          <div className=" border-b-2  pb-2 pl-6 ">
            <div className="">
              <h1 className="uppercase text-normal font-bold text-slate-400 p-4">
                Realtor
              </h1>
              <div class="flex items-center space-x-4 mb-4">
                <div class="flex-shrink-0">
                  <img
                    class="w-10 h-10 object-cover rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="Neil image"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate">
                    Tiffany Heffner
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    (555) 555-431
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" pl-6">
            <div className="flex">
              <img
                className="h-7 w-7 mr-4 mb-4"
                src="https://img.icons8.com/ios/2x/bedroom.png"
                alt=""
              />
              <p>3 Bedrooms</p>
            </div>
            <div className="flex">
              <img
                className="h-7 w-7 mr-4 mb-4"
                src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/2x/external-bathroom-smart-home-device-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"
                alt=""
              />
              <p>3 Bathrooms</p>
            </div>
          </div>
        </div>

        <div class="flex flex-col justify-between md:items-center pl-4 md:h-60 lg:h-32 w-96 lg:py-6 px-4 md:bg-blue-50 pt-5 md:pt-10">
          <div className="flex">
            <div>
              <h5 class="uppercase text-lg font-bold tracking-tight text-slate-500 dark:text-white mr-5">
                Detached house
              </h5>
              <span className="hidden sm:hidden md:block lg:hidden md:mb-2 lg:mb-0 font-bold text-slate-400">
                .5Y OLD
              </span>
              <p class="text-3xl font-semibold  text-gray-700 ">$750,000</p>
              <span className="capitalize font-bold  text-slate-400">
                742 evergren terrace
              </span>
            </div>

            <span className=" md:hidden lg:block font-bold text-slate-400">
              .5Y OLD
            </span>
          </div>
        </div>
        <div className="hidden md:hdden lg:flex flex-col justify-between bg-blue-50  pl-4 h-32 border-l-2 py-6 px-4 w-60">
          <div className="">
            <h1 className="uppercase text-normal font-bold text-slate-400 pb-2">
              Realtor
            </h1>
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img
                  class="w-9 h-9 object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt="Neil image"
                />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Tiffany Heffner
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  (555) 555-431
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:flex md:hidden md:hdden lg:flex lg:flex-col lg:justify-between md:bg-blue-50 pl-4 md:pl-0  h-16 md:h-32 w-full lg:w-60 border-y-2 lg:border-y-0 mt-2 lg:mt-0 lg:border-l-2 py-6 ">
          <div className="flex items-center">
            <img
              className="h-7 w-7 mr-2 lg:ml-2"
              src="https://img.icons8.com/ios/2x/bedroom.png"
              alt=""
            />
            <p className="pr-24 lg:pr-0">3 Bedrooms</p>
          </div>
          <div className="flex items-center">
            <img
              className="h-7 w-7 mr-2 lg:ml-2"
              src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/2x/external-bathroom-smart-home-device-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"
              alt=""
            />
            <p>3 Bathrooms</p>
          </div>
        </div>
        <div className=" md:hidden flex-col justify-between bg-blue-50 h-24  pl-4  md:h-32 border-l-2 py-4 px-4 w-full">
          <div className="">
            <h1 className="uppercase text-normal font-bold text-slate-400 pb-2">
              Realtor
            </h1>
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img
                  class="w-10 h-10 object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt="Neil image"
                />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate ">
                  Tiffany Heffner
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  (555) 555-431
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

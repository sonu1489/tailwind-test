import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div class="flex flex-col items-center bg-white border border-2 shadow-md rounded-md max-w-[400px]  md:flex-row md:max-w-[850px] ">
        <img
          class="object-fill rounded-t-md md:rounded-t-none md:rounded-tl-md md:rounded-lb-md md:h-60 md:w-50 lg:h-40 lg:w-56 "
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
                    alt="Neil"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate">
                    Tiffany Heffner
                  </p>
                  <p class="text-sm text-gray-500 truncate ">(555) 555-431</p>
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

        <div class="flex flex-col pl-4 justify-between w-full sm:w-96  md:h-60 lg:h-40 md:items-center md:justify-center md:bg-blue-50 lg:bg-white">
          <div className="flex">
            <div>
              <h5 class="uppercase text-lg font-bold tracking-tight text-slate-500  mr-5">
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
        <div className="hidden md:hdden lg:flex flex-col  bg-blue-50  pl-4 border-l-2 py-6 lg:h-40 lg:w-1/3 md:justify-center  px-4 w-60">
          <div className="">
            <h1 className="uppercase text-normal font-bold text-slate-400 pb-2">
              Realtor
            </h1>
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img
                  class="w-9 h-9 object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt="Neil"
                />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate ">
                  Tiffany Heffner
                </p>
                <p class="text-sm text-gray-500 truncate">(555) 555-431</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:hidden md:hdden w-full space-x-12 lg:space-x-0 lg:flex lg:flex-col md:space-y-4 md:bg-blue-50  md:justify-center  h-16 md:h-32 lg:h-40 lg:w-60 border-y-2 lg:border-y-0 lg:border-l-2 ">
          <div className="flex pl-4 md:pl-0 items-center">
            <img
              className="h-7 w-7 mr-2 lg:ml-2"
              src="https://img.icons8.com/ios/2x/bedroom.png"
              alt=""
            />
            <p className=" pr-2  lg:pr-0">3 Bedrooms</p>
          </div>
          <div className="flex pl-2 items-center">
            <img
              className="h-7 w-7 mr-2"
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
                  alt="Neil"
                />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate ">
                  Tiffany Heffner
                </p>
                <p class="text-sm text-gray-500 truncate">(555) 555-431</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

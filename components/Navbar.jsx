"use client";
import React, { useEffect, useState } from "react";
import MultiLevelDropdown from "./MultiLevelDropDown";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { DarkBtn } from "@/shadcn/ui/DarkBtn";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "@/redux/slices/UserSlice";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const router = useRouter();

  // console.log(state)

  useEffect(() => {
    const oneTimeData =    localStorage.getItem('accessToken')
    const localData = JSON.parse(oneTimeData)
    if(localData?.status == 200){
        dispatch(logIn(localData))
    }
    // console.log(localData)
  },[])

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };



 

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };


  return (
    <nav className="bg-slate-200   w-full z-20  start-0 border-b border-gray-200 min-h-[80px]">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/> */}
          <span className="self-center text-3xl  whitespace-nowrap text-black font-bold">
            Date
            <span className="text-3xl text-red-600 ">lancer</span>
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse  w-full justify-between sm:w-fit sm:justify-start">
          <div className=" flex gap-5 justify-center sm:items-center flex-col sm:flex-row items-start">
            {/* search start */}
            {state?.status != 200 && (
              <>
                <button
                  onClick={() => router.push("/login")}
                  type="button"
                  className="focus:outline-none  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 mb-5 sm:mb-0 mr-5"
                >
                  Login
                </button>
              </>
            )}
           

            {state?.status == 200 && (
              <>
                <MultiLevelDropdown />

                <label
                  htmlFor="default-search"
                  className=" text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>

                <img
                  className="w-10 h-10 rounded-full border-2 border-black mr-5 cursor-pointer"
                  src={state?.userDoc?.imageUrl}
                  alt="Rounded avatar"
                  onClick={() => {
                    // console.log(state?.userDoc?.role)
                    if(state?.userDoc?.role == "Freelancer"){
                      router.push(`/freelancer/${state?.userDoc?._id}`)
                    } else {
                      router.push(`/HR/${state?.userDoc?._id}`)
                    }
                  }}
                />
              </>
            )}
          </div>
          
          <DarkBtn />

          <button
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden DateLancerfocus:outline-none focus:ring-2 "
            aria-controls="navbar-sticky"
            aria-expanded={isNavbarOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isNavbarOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className=" justify-center items-start sm:items-center flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-slate-200 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <Link
                href="#"
                className="block py-2 px-3 dark:text-gray-900  hover:dark:text-white  hover:text-white hover:bg-blue-700 sm:hover:text-black sm:hover:bg-slate-200 rounded md:bg-transparent md:text-blue-700 md:p-0 "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-gray-900 rounded DateLancermd:hover:bg-transparent md:hover:text-blue-700 md:p-0 hover:bg-blue-600   hover:text-white sm:hover:bg-slate-200   border-gray-700 mb-4 sm:mb-0"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

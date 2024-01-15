"use client";
import { Button } from "@/shadcn/ui/button";

import { Calendar } from "@/shadcn/ui/calendar";
import { useState } from "react";

import { toast } from "react-toastify";

export default function Home() {
  const notify = (message) =>
    toast(message, {
      position: "bottom-left",
      autoClose: 5000,
      theme: "light",
    });

  const [date, setDate] = useState(new Date());
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium dark:text-white text-gray-900">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button> */}
              <Button
                variant="secondary"
                onClick={() => {
                  console.log("working" + date);
                }}
              >
                Button
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  notify("Error in logging user, Try again");
                }}
              >
                Button 2
              </Button>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

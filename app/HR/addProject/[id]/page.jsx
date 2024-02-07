"use client";

import React, { useState } from "react";
import Select from "react-select";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Separator } from "@/shadcn/ui/separator";
import axios from "axios";
import { useParams,useRouter } from "next/navigation";
import { useToast } from "@/shadcn/ui/use-toast";

const AddJob = () => {
    const router = useRouter()
  const {id} = useParams()

  const { toast } = useToast();

  const [JobTitle, setJobTitle] = useState("");
  const [WorkExperience, setWorkExperience] = useState("0-2 years");

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];


  const [selectedOption, setSelectedOption] = useState(null);

  const [value, setValue] = useState("");
  const [skillValue, setSkillValue] = useState("");

  const [tags, setTags] = useState([]);

  const removeTags = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };
  const addTags = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  const handleProfile = async () => {
    const option = selectedOption?.value

    // console.log(JobTitle)
    // console.log(WorkExperience)
    // console.log(option)
    // console.log(value)
    // console.log(skillValue)
    // console.log(tags)

    try {
      const {data} = await axios.put(`/api/HR/addProject/${id}`,{JobTitle,WorkExperience,option, value,skillValue,tags })
      // console.log("working")
      // console.log(data);
      toast({
        title: "Job Created",
        description: `${JobTitle} is created`,
      });
      setJobTitle("")
      setWorkExperience("")
      setValue("")
      setSkillValue("")
      
    } catch (error) {
      toast({
        title: "Job not Created",
        description: `${JobTitle} doesn't create due to some error`,
      });
      
    }  


  };
  return (
    <>
      <div className=" flex sm:flex-row flex-col dark:bg-white">
        <div className="bg-[#F2EFE8] sm:w-[25%] w-full sm:min-h-screen">
          <div className=" p-5">
            <div className="text-black border p-5 bg-white rounded-md">
              Job details
            </div>
            <div className="text-black border p-5 bg-white rounded-md mt-5">
              review and submit
            </div>
            <div className="text-black border p-5 bg-white rounded-md mt-5 hover:bg-gray-200 cursor-pointer" onClick={() =>  router.push(`/myJobs/${id}`)}>
              Posted Jobs
            </div>
          </div>
        </div>
        <div className=" sm:w-[75%] w-full  py-10 sm:px-32 px-4 mb-8">
          <div className="text-black text-xl">
            <span className=" font-semibold mr-4">Post a Job:</span>
            Job Details(1/2)
          </div>
          <div className="text-black mt-5 font-semibold">Job title</div>
          <div className="text-gray-400 mt-2 font-semibold">
            Use a suitable title which describes the kind of work clearly.
          </div>
          <input
            type="text"
            className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Job name 😄"
            value={JobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />

          <div className="text-black mt-16 font-semibold">Broad Skill</div>
          <div className="text-gray-400 mt-2 font-semibold">
            Choose a suitable business function .
          </div>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            className="text-black mt-2"
          />

          <div className="text-black mt-4 font-semibold">
            Job Description
          </div>
          <div className="text-gray-400 mt-2 font-semibold">
            Be sure to mention a brief description of your company, objectives,
            deliverables, and timelines
          </div>
          <ReactQuill
            className="mt-2 rounded-md text-black "
            theme="snow"
            value={value}
            onChange={setValue}
            style={{ height: "100px" }}
          />

          <div className="text-black mt-16 font-semibold">Skills Required</div>
          <div className="text-gray-400 mt-2 font-semibold">
            Indicate key eligibility criteria and skills required for this role
          </div>
          <ReactQuill
            className="mt-2 rounded-md text-black "
            theme="snow"
            value={skillValue}
            onChange={setSkillValue}
            style={{ height: "100px" }}
          />

          <div className="text-black mt-16 font-semibold">Tags</div>
          <div className="text-gray-400 mt-2 font-semibold">
            Indicate specific skills and skill areas you want expertise in
          </div>

          <div className="tags-input block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  ">
            <input
              type="text"
              onKeyUp={(event) => addTags(event)}
              placeholder="Press enter to add tags"
              className='bg-green-50 border border-green-500 text-green-900  placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 " placeholder="Success input">
  <p class="mt-2 text-sm text-green-600 dark:text-green-500'
            />
            <ul className="mt-4 flex gap-2 max-w-full  flex-wrap">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="flex bg-[#cf5c36] w-fit gap-5 items-center justify-center p-2 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    onClick={() => removeTags(index)}
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                  <Separator orientation="vertical" />
                  <span>{tag}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-2 border-gray-200 mt-6 rounded-md p-6">
            <div className="text-black">Recommended Skills</div>
            <div className=" flex flex-wrap gap-4 mt-2  ">
              {Array.from({ length: 10 }, (_, index) => index + 1).map(
                (item) => {
                  return (
                    <>
                      <div className="border border-[#FEC34D] text-black rounded-md py-2 px-4">
                        +Skill 1
                      </div>
                    </>
                  );
                }
              )}
            </div>
          </div>

          <div className="text-black mt-16 font-semibold">
            Work Experience (multiple select)
          </div>
          <div className="text-gray-400 mt-2 font-semibold">
            Indicate the level of seniority you want
          </div>

          <div className=" rounded-md flex flex-wrap gap-4 mt-2">
            <div className="p-4 border-gray-200 border-2 rounded-lg">
              <input
                type="radio"
                className="border rounded-xl"
                name="workExperience"
                id="expYear"
                onClick={() => setWorkExperience("0-2 years")}
              />
              <div
                className="text-black"
              >
                0-2 years
              </div>
            </div>
            <div className="p-4 border-gray-200 border-2 rounded-lg">
              <input
                type="radio"
                className="border "
                name="workExperience"
                id="expYear"
                onClick={() => setWorkExperience("3-5 years")}
              />
              <div
                className="text-black"
              >
                3-5 years
              </div>
            </div>
            <div className="p-4 border-gray-200 border-2 rounded-lg">
              <input
                type="radio"
                className="border "
                name="workExperience"
                id="expYear"
                onClick={() => setWorkExperience("6-10 years")}
              />
              <div
                className="text-black"
              >
                6-10 years
              </div>
            </div>
            <div className="p-4 border-gray-200 border-2 rounded-lg">
              <input
                type="radio"
                className="border "
                name="workExperience"
                id="expYear"
                onClick={() => setWorkExperience("11-15 years")}
              />
              <div
                className="text-black"
              >
                11-15 years
              </div>
            </div>
            <div className="p-4 border-gray-200 border-2 rounded-lg">
              <input
                type="radio"
                className="border "
                name="workExperience"
                id="expYear"
                onClick={() => setWorkExperience("16-20 years")}
              />
              <div
                className="text-black"
              >
                16-20 years
              </div>
            </div>
            <div className="p-4 border-gray-200 border-2 rounded-lg">
              <input
                type="radio"
                className="border "
                name="workExperience"
                id="expYear"
                onClick={() => setWorkExperience("21-25 years")}
              />
              <div
                className="text-black"
              >
                21-25 years
              </div>
            </div>
            <div className="p-4 border-gray-200 border-2 rounded-lg">
              <input
                type="radio"
                className="border "
                name="workExperience"
                id="expYear"
                onClick={() => setWorkExperience("25+ years")}
              />
              <div
                className="text-black"
              >
                25+ years
              </div>
            </div>
          </div>

          <div className="text-black mt-16 font-semibold  flex justify-between items-center">
            <button
              type="button"
              className="text-black   focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800 border border-black hover:bg-black hover:text-white"
             
            >
            Back
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleProfile}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddJob

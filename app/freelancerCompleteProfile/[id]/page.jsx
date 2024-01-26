"use client";

import React, { useState } from 'react';
import Select from 'react-select';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

 const FreelancerCompleteProfile = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];

      const [selectedOption, setSelectedOption] = useState(null);
      
        const [value, setValue] = useState('');
        const [skillValue,setSkillValue] = useState('')

    return(
        <>
            <div className=" flex sm:flex-row flex-col dark:bg-white">
            <div className="bg-[#F2EFE8] sm:w-[25%] w-full sm:min-h-screen">
                <div className=" p-5">

                    <div className="text-black border p-5 bg-white rounded-md">
                        project details
                    </div>  
                    <div className="text-black border p-5 bg-white rounded-md mt-5">
                        review and submit
                    </div>

                </div>
            </div>
            <div className=" sm:w-[75%] w-full  py-10 sm:px-32 px-4 mb-8">
                <div className="text-black text-xl">
                    <span className=" font-semibold mr-4">
                     Post a Project:
                    </span>
                      Project Details(1/2)
                </div>
                <div className="text-black mt-5 font-semibold">
                   Project title
                </div>
                <div className="text-gray-400 mt-2 font-semibold">
                Use a suitable title which describes the kind of work clearly. 
                </div>
                <input type="text" id="email" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" />

                <div className="text-black mt-16 font-semibold">
                   Project title
                </div>
                <div className="text-gray-400 mt-2 font-semibold">
                Use a suitable title which describes the kind of work clearly. 
                </div>
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    className="text-black mt-2"
                />
                

                <div className="text-black mt-4 font-semibold">
                   Project Description
                </div>
                <div className="text-gray-400 mt-2 font-semibold">
                Be sure to mention a brief description of your company, objectives, deliverables, and timelines 
                </div>
                 <ReactQuill className='mt-2 rounded-md text-black ' theme="snow" value={value} onChange={setValue} style={{ height: '100px' }} />
                
                
                 <div className="text-black mt-16 font-semibold">
                 Skills Required 
                </div>
                <div className="text-gray-400 mt-2 font-semibold">
                Indicate key eligibility criteria and skills required for this role
                </div>
                 <ReactQuill className='mt-2 rounded-md text-black ' theme="snow" value={skillValue} onChange={setSkillValue} style={{ height: '100px' }} />
                

                
                
                 </div>

        </div>
        </>
    )
}
export default FreelancerCompleteProfile;
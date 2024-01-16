"use client";

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import { useDispatch } from 'react-redux';

import { logIn } from "@/redux/slices/UserSlice";

import { useForm } from 'react-hook-form';

import axios from "axios"

const Register = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


    const router = useRouter()
  
    const dispatch = useDispatch()

     const handleRegister = async (data) => {
    // e.preventDefault()
    const image = data.image[0];
    const name = data.name;
    const password = data.password;
    const email = data.email;
      console.log(data); 
    const formData = new FormData();
    formData.append("file", image);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_USERNAME
    );

 
        try {
          const uploadResponse = await fetch(
              `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}/image/upload`,
              {
                method: "POST",
                body: formData,
              }
            );
              console.log(uploadResponse);

            const uploadedImageData = await uploadResponse.json();
            const imageUrl = uploadedImageData.secure_url;

               console.log(imageUrl);
          if (imageUrl) {
            const res = await axios.post("/api/register", {
              name,
              password,
              email,
              imageUrl,
            });
            if (res.status === 200) {
              router.push("/login")
            } else {
              console.log("Error in registring user");
            }
          }
        } catch (error) {
          console.log(error);
        }

    
    
  };


  return (
    <section className="gradient-form h-full bg-neutral-700 flex justify-center items-center">
  <div className="container h-full p-10">
    <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
      <div className="w-full">
        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
          <div className="g-0 lg:flex lg:flex-wrap">
            {/* Left column container*/}
            <div className="px-4 md:px-0 lg:w-6/12">
              <div className="md:mx-6 md:p-12">
                {/*Logo*/}
                <div className="text-center">
                  <img className="mx-auto w-48" src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="logo" />
                  <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                    We are The Lotus Team
                  </h4>
                </div>
                <form>
                  <p className="mb-4">Please register to your account</p>
                  {/*Username input*/}
                  <div className="relative mb-4" data-te-input-wrapper-init>
                  <input 
                    type="text" 
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear   " 
                    id="exampleFormControlInput1" 
                    placeholder="Username" 
                    {...register("name")}
                    />

                  </div>
                  {/*Username input*/}
                  <div className="relative mb-4" data-te-input-wrapper-init>
                  <input 
                    type="email" 
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear   " 
                    id="exampleFormControlInput1" 
                    placeholder="Email" 
                    {...register("email")}
                    />

                  </div>

                  <div className="relative mb-4" data-te-input-wrapper-init>
                  <input 
                    type="email" 
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear   " 
                    id="exampleFormControlInput1" 
                    placeholder="Password" 
                    {...register("password")}
                    />

                  </div>
                  
                  
                  <div className=" px-2 mb-4">
                    
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" {...register("image")}/>

                  </div>
              
                  {/*Submit button*/}
                  <div className="mb-12 pb-1 pt-1 text-center">
                    <button className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]" type="button" data-te-ripple-init data-te-ripple-color="light" style={{background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'}}
                       onClick={handleSubmit(handleRegister)}
                    >
                      Register
                    </button>
                  </div>
                  {/*Register button*/}
                  <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 mr-2"> Have an account?</p>
                    <button type="button" className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10" data-te-ripple-init data-te-ripple-color="light"
                    onClick={() => router.push('/login')}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Right column container with background and description*/}
            <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none" style={{background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'}}>
              <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                <h4 className="mb-6 text-xl font-semibold">
                  We are more than just a company
                </h4>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Register

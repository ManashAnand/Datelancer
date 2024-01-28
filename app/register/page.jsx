"use client";

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import { useDispatch } from 'react-redux';

import { logIn } from "@/redux/slices/UserSlice";

import { useForm } from 'react-hook-form';

import axios from "axios"

import { useToast } from "@/shadcn/ui/use-toast";

const Register = () => {

  const [role,setRole] = useState(false)
  const [error,setError] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


    const router = useRouter()
  
    const dispatch = useDispatch()
    
  const { toast } = useToast();

     const handleRegister = async (data) => {
       const {email,username,password,confirmpassword} = data
      if (email == "" || password == "" || username == "" || confirmpassword == "") {
        
        toast({
          title: "Error: Login",
          description: "Please fill every inputs",
        });
        setError("Error: Complete all field")
        return;
      }
        console.log(email)
        console.log(role)


        try {
          const res = await axios.post('/api/register',{email,username,password,confirmpassword,role})
          console.log(res)
          if(res.status == 200){
            router.push("/login")
          }
          else{
            toast({
              title: "Error: Register",
              description: "Error in register form",
            });
            setError("Error in registration form")
          }
        } catch (error) {
          console.log("working")
          toast({
            title: "Error: Register",
            description: "Error in register form from server",
          });
          setError("Error in registration form by server")
          console.log(error);
        }
      
    
    };    


  return (
    <section className="gradient-form h-full  flex justify-center items-center flex-col">
      <div className=" h-full flex px-10 py-5 justify-center items-center uppercase text-3xl ">
        Join Now
      </div>
      <div className=" h-full flex px-10 py-2.5 justify-center items-center   text-center">
      India&apos;s finest talent. Global giants. Unparalleled opportunities. This is DateLancer. Elevate your game.
      </div>
      {/* main register */}

      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <div className=" w-full text-center text-xl mb-4">Choose relevant option -</div>
     
        <div className=" w-full flex gap-4 flex-col sm:flex-row">
          <div className=" flex gap-2">
            <div className={`w-0 h-0 
              border-l-[15px] border-l-transparent
              border-b-[20px]  ${role ? "border-b-gray-500":"border-b-yellow-500"}
              border-r-[15px] border-r-transparent cursor-pointer `}
              onClick={() => setRole(false)}
              >
            </div>
            <div className=" ">I&apos;m looking for clients.</div>
          </div>
          <div className=" flex gap-2">
            <div className={`w-0 h-0 
              border-l-[15px] border-l-transparent
              border-b-[20px]  ${!role ? "border-b-gray-500":"border-b-yellow-500"}
              border-r-[15px] border-r-transparent cursor-pointer `}
              onClick={() => setRole(true)}
              >
            </div>
            <div className="">I&apos;m looking for talent.</div>
          </div>
        </div>

          <div className=" w-full">
      

              <div className="relative my-4 " data-te-input-wrapper-init>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Username
                      </label>

                      <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear border-gray-200   "
                        id="exampleFormControlInput1"
                        {...register("username")}
                      />
                    </div>
              <div className="relative my-4 " data-te-input-wrapper-init>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>

                      <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear border-gray-200   "
                        id="exampleFormControlInput1"
                        {...register("email")}
                      />
                    </div>
              <div className="relative mb-4 " data-te-input-wrapper-init>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>

                <input
                  type="password"
                  className="peer block min-h-[auto] w-full rounded border-2 border-gray-200  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear   "
                  id="exampleFormControlInput1"
                  {...register("password")}
                />
              </div>
              <div className="relative mb-4" data-te-input-wrapper-init>
                <label
                  htmlFor="Confirm Password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>

                <input
                  type="password"
                  className="peer block min-h-[auto] w-full  rounded border-2 border-gray-200  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear   "
                  id="exampleFormControlInput1"
                  {...register("confirmpassword")}
                />
              </div>

              {
                error && (
                  <>
                  <label
                  htmlFor="Confirm Password"
                  className="block mb-2 text-sm font-medium text-red-500 dark:text-red-500"
                >
                  {error}
                </label>
                  </>
                )
              }

              <div className="w-full  flex justify-center item-center">
                <button
                  type="submit"
                  className={`inline-block active:scale-95  rounded  bg-yellow-500  px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600  hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] `}
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={handleSubmit(handleRegister)}
                >
                  Register
                </button>

              </div>

          </div>
     
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    
    </div>
  </div>
</section>
  </section>
  )
}

export default Register

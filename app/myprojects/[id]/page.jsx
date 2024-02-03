"use client";

import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'next/navigation'
import { useToast } from "@/shadcn/ui/use-toast";

import { ToastAction } from "@/shadcn/ui/toast"
import ProjectCard from '@/components/ProjectCard';

const MyProjects = () => {
    const {id} = useParams()
    const [projects,setProjects] = useState([]);
    const {toast} = useToast();

    const handleProject = async () => {
        try {
            const res = await axios.get(`/api/myprojects/${id}`)
            // console.log(res)
            // console.log(res.status)
            if(res.status == 200){
                    console.log(res?.data?.userProjects?.projects)
                    setProjects([...res?.data?.userProjects?.projects]);
            } else {
                toast({
                    title: "User projects doesn't load",
                    description: "Please try again ", 
                      action: <ToastAction altText="Try again" onClick={handleProject}>Try again</ToastAction>,
                  });
            }
        } catch (error) {
            console.log(error)
            toast({
                title: "Error in getting projects",
                description: "Please try again", 
                  action: <ToastAction altText="Try again" onClick={handleProject}>Try again</ToastAction>,
              });
        }
    }

    useEffect(() => {
        handleProject();
    },[])
  return (
    <>
    <div className="md:grid xl:grid-cols-3 sm:grid-cols-2 gap-4 flex flex-col mt-12 sm:mx-20 mx-0  justify-center items-center scale-90 sm:scale-100 flex-wrap mb-4">
        {
            projects?.map((item) => {
                return(
                    <>
                        <ProjectCard item={item}/>
                    </>
                )
            })
        }
    </div>
    </>
  )
}

export default MyProjects

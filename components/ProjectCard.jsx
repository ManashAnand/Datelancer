import React from 'react'

const ProjectCard = ({item}) => {
    // console.log(item)
  return (
    <>
<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl max-w-96">
  {/* <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
      alt="card-image" />
  </div> */}
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {item?.projectTitle}
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
       {item?.projectDescription}
    </p>
  </div>
  <p className=" px-6 block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      Broad Category: {item?.broadSkill}
    </p>
  <p className=" px-6 block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      Skills Used
    </p>
    <h5 className="block mb-2 px-6 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {item?.Tags?.map((tag) => {
        return(
            <>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{tag}</span>
            </>
        )
      })}
    </h5>

</div>   
    </>
  )
}

export default ProjectCard

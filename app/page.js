export default function Home() {
  return (
    <>
      <section className=" body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-5xl font-medium dark:text-white text-black tracking-widest mb-8">
              Meet the
              <span className="text-red-500 ml-3 block sm:inline">Right</span>
              <br className="hidden lg:inline-block" />
              Freelance Talent.
            </h1>
            <p className="mb-8 leading-relaxed dark:text-gray-300 text-xl text-black max-w-xl">
            Save your time by letting our AI algorithm connect you with people who possess the right skill set to get your job done.  
            </p>
            {/* <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div> */}
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
            
          </div>
        </div>
      </section>
    </>
  );
}

const Home = () => {
  return (
    <section id="home" className="home-height flex items-center">
      <div className="w-[90%] mx-auto flex">
        <div className="sm:w-2/3">
          <h1 className="sm:text-5xl text-xl text-center sm:text-left mb-4">
            Hello, I&apos;m
            <span className="block"> a Front end Developer</span>
          </h1>
          <p className="text-gray-500 text-center sm:text-left">
            Front-end Developer with a solid foundation in HTML, CSS,
            JavaScript, React, Material UI, TailwindCSS, and Redux. Possesses
            excellent problem-solving skills and proven teamwork capabilities.
            Dedicated to crafting user-centric, responsive web applications.
          </p>
        </div>

        <div className="hidden sm:flex w-1/3 justify-end border-r border-gray-700">
          {/* <div className="flex flex-col justify-evenly h-full">
            <div className="rounded-full w-4 h-4 border border-red-900 bg-red-900 -mt-1 -mr-2"></div>
            <div className="rounded-full w-4 h-4 border border-red-900 bg-red-900 -mt-1 -mr-2"></div>
            <div className="rounded-full w-4 h-4 border border-red-900 bg-red-900 -mt-1 -mr-2"></div>
            <div className="rounded-full w-4 h-4 border border-red-900 bg-red-900 -mt-1 -mr-2"></div>
            <div className="rounded-full w-4 h-4 border border-red-900 bg-red-900 -mt-1 -mr-2"></div>
            <div></div>
            <div></div>
            <div></div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Home;

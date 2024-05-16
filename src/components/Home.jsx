import me from "../icons/preview.png";

const Home = () => {
  return (
    <section id="home" className="home-height flex items-start sm:items-center">
      <div className="w-[90%] mx-auto flex sm:flex-row flex-col-reverse place-items-center">
        <div className="sm:w-2/3 w-full">
          <h1 className="sm:text-5xl text-xl text-center sm:text-left mb-4">
            Hello, I&apos;m Julius,
            <span className="block text-gradient"> a Front end Developer</span>
          </h1>
          <p className="text-gray-500 text-center sm:text-left">
            Front-end Developer with a solid foundation in HTML, CSS,
            JavaScript, React, Material UI, TailwindCSS, and Redux. Possesses
            excellent problem-solving skills and proven teamwork capabilities.
            Dedicated to crafting user-centric, responsive web applications.
          </p>
        </div>

        <div className="flex sm:w-1/3 w-full justify-center mb-20 sm:mb-0">
          <img className="h-72 rounded-full" src={me} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Home;

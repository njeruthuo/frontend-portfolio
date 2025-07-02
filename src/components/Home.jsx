import me from "../icons/me.jpg";

const Home = () => {
  return (
    <section id="home" className="home-height flex items-start sm:items-center">
      <div className="w-[90%] mx-auto flex sm:flex-row flex-col-reverse place-items-center">
        <div className="sm:w-1/2 w-full">
          <h1 className="sm:text-5xl text-xl text-center  sm:text-left mb-4">
            Hello, I'm Julius, <br />
            <span className="block text-gradient pt-2">
              {" "}
              a Full stack Developer
            </span>
          </h1>
          <p className="text-white text-center text-base/6 sm:text-left pr-6">
            Software engineer building real-world solutions — from embedded
            systems to full-stack web and mobile apps. Expert in Python
            (Django/FastAPI), C/C++ (embedded), and JavaScript/TypeScript
            (React, React Native). I design clean, scalable systems that just
            work — from payment microservices to asset tracking and hardware
            automation.
          </p>
        </div>

        <div className="flex sm:w-1/2 w-full justify-center mb-20 mt-5 sm:mb-0">
          <img className="h-full rounded-full" src={me} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Home;

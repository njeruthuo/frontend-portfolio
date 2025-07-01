import me from "../icons/me.jpg";

const Home = () => {
  return (
    <section id="home" className="home-height flex items-start sm:items-center">
      <div className="w-[90%] mx-auto flex sm:flex-row flex-col-reverse place-items-center">
        <div className="sm:w-1/2 w-full">
          <h1 className="sm:text-5xl text-xl text-center  sm:text-left mb-4">
            Hello, I'm Julius, <br/>
            <span className="block text-gradient pt-2"> a Full stack Developer</span>
          </h1>
          <p className="text-white text-center text-base/6 sm:text-left pr-6">
            I’m a software engineer who’s all about building real-world
            solutions that create impact — from embedded systems to full-stack
            web and mobile apps. My core strengths lie in Python
            (Django/FastAPI), C/C++ (for embedded systems), and
            JavaScript/TypeScript (React, React Native). I’ve worked on projects
            like: Payment microservices (M-Pesa STK push, PayPal integrations)
            Asset tracking and risk analysis platforms Embedded systems for
            automation (ESP32, SIM7600, pool table controllers) Job placement
            platforms and custom eCommerce backends. I thrive in terminal-first
            environments, love solving hard problems, and always design with
            scalability and maintainability in mind. Whether it’s backend APIs,
            mobile apps, or hardware integration, I’m about getting things done
            — clean, efficient, and user-focused.
          </p>
        </div>

        <div className="flex sm:w-1/2 w-full justify-center mb-20 sm:mb-0">
          <img className="h-full rounded-full" src={me} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Home;

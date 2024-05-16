import git from "../icons/git.png";
import react from "../icons/react.png";
import tailwind from "../icons/tailwind.png";
import materialUI from "../icons/MUI.png";
import redux from "../icons/redux.png";
import js from "../icons/js.png";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-slate-800  scroll-pt-20">
      <div className="w-[90%] mx-auto pt-20">
        <h2 className="text-xs ">Services</h2>
        {/* <hr /> */}
        <p className="text-2xl mt-3 text-red-600 border-b-4 border-red-600 sm:w-48">
          My Skills
        </p>

        {/* Flex container */}

        <div id="skills" className="flex flex-wrap place-items-center mt-8 space-y-4 p-4">
          <div className="skill">
            <img src={git} alt="" />
            <h1>Git version control</h1>
            <p>A code version control tool</p>
          </div>
          <div className="skill">
            <img src={react} alt="" />
            <h1>React Library</h1>
            <p>
              A frontend library that makes building UIs super easy using
              JavaScript.
            </p>
          </div>
          <div className="skill">
            <img src={tailwind} alt="" />
            <h1>TailwindCSS</h1>
            <p>A utility first framework for rapid UI development</p>
          </div>
          <div className="skill">
            <img src={materialUI} alt="" />
            <h1>Material UI</h1>
            <p>Pre-styles UI components library</p>
          </div>
          <div className="skill">
            <img src={redux} alt="" />
            <h1>Redux</h1>
            <p>A goated state management library</p>
          </div>
          <div className="skill">
            <img src={js} alt="" />
            <h1>JavaScript</h1>
            <p>a powerful multipurpose scripting language</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

import { skills } from "../data";

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

        <div
          id="skills"
          className="flex flex-wrap place-items-center mt-3 sm:mt-8 space-y-4 sm:p-4"
        >
          {skills.map((skill, index) => {
            const { img, title, description } = skill;
            return (
              <div key={index} className="skill">
                <img src={img} alt="" />
                <div>
                  <h1>{title}</h1>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default About;

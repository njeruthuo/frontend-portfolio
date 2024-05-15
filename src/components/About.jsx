import code from "../icons/code.png";

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

        <div className="flex flex-wrap mt-8 space-y-4 p-4">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <img src={code} alt="" />
            <h1>Git version control</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, dignissimos!
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <img src={code} alt="" />
            <h1>Git version control</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, dignissimos!
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <img src={code} alt="" />
            <h1>Git version control</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, dignissimos!
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <img src={code} alt="" />
            <h1>Git version control</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, dignissimos!
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <img src={code} alt="" />
            <h1>Git version control</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, dignissimos!
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <img src={code} alt="" />
            <h1>Git version control</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, dignissimos!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

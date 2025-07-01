import crown from "../icons/king.png";
import briefcase from "../icons/briefcase.png";

const Resume = () => {
  return (
    <section
      id="resume"
      className="min-h-screen bg-slate-800  scroll-pt-10 pb-5"
    >
      <div className="w-[90%] mx-auto pt-10">
        <h2 className="text-xs ">Resume</h2>
        {/* <hr /> */}
        <p className="text-2xl mt-3 text-red-600 border-b-4 border-red-600 sm:w-48">
          About me
        </p>

        {/* Flex container */}

        <div id="about me" className="flex gap-4 mt-8 flex-col sm:flex-row">
          {/* Education */}
          <div className="w-full sm:w-1/2">
            <h2 className="text-center font-extrabold flex place-content-center place-items-center gap-3">
              {" "}
              <img className="inline-block h-8" src={crown} alt="" />
              Education:
            </h2>

            <div className="mt-4">
              <div className="bg-slate-950 w-full p-4">
                <h5 className="text-xs text-gray-500">Aug 2019 - Dec 2023</h5>

                <h2 className="font-extrabold my-1">Bsc. Computer Science</h2>
                <p className="text-sm text-gray-400">
                  Graduated with honours (second class upper division). My
                  Thesis project was a web application deploying an OCR model.
                </p>

                <h2 className="mt-3 text-gray-500">Laikipia University</h2>
              </div>
            </div>

            <div className="">
              <div className="bg-slate-900 w-full p-4">
                <h5 className="text-xs text-gray-500">Jan 2015 - Nov 2018</h5>

                <h2 className="font-extrabold my-1">
                  Kenya certificate of secondary Education
                </h2>
                <p className="text-sm text-gray-400">
                  Graduated with an overall grade B with leads in Maths and
                  Physics.
                </p>

                <h2 className="mt-3 text-gray-500">
                  Kiamuchii secondary school
                </h2>
              </div>
            </div>
          </div>

          {/* Experience */}

          <div className="w-full sm:w-1/2">
            <h2 className="text-center font-bold flex place-content-center place-items-center gap-3">
              <img className="inline-block h-8" src={briefcase} alt="" />
              Work Experience:
            </h2>

            <div className="mt-4">
              <div className="bg-slate-950 w-full p-4">
                <h5 className="text-xs text-gray-500">June 2023 - Aug 2023</h5>

                <h2 className="font-extrabold my-1">
                  Volunteer software developer
                </h2>
                <p className="text-sm text-gray-400">
                  I was a key player in developing the second version of their
                  website.
                </p>

                <h2 className="mt-3 text-gray-500">
                  Computer Engineering Forum (remote)
                </h2>
              </div>
            </div>

            <div className="">
              <div className="bg-slate-900 w-full p-4">
                <h5 className="text-xs text-gray-500">Aug 2023 - Oct 2023</h5>

                <h2 className="font-extrabold">
                  Renovation of LamwaVetcare website
                </h2>
                <p className="text-sm text-gray-400">
                  Renovation of a website by adding new and removing outdated
                  features on a live website.
                </p>

                <h2 className="mt-3 text-gray-500">Lamwa vetcare, Thika.</h2>
              </div>
            </div>
            <div className="">
              <div className="bg-slate-950 w-full p-4">
                <h5 className="text-xs text-gray-500">April 2024 - May 2024</h5>

                <h2 className="font-extrabold">
                  Website design and Development
                </h2>
                <p className="text-sm text-gray-400">
                  I designed and single handedly created the website for a law
                  firm in Nairobi.
                </p>

                <h2 className="mt-3 text-gray-500">
                  Mochere & Company Advocates
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Resume download */}
        <div className="">
          <a
            className="mt-3 flex justify-center items-center sm:w-1/3 w-full mx-auto bg-red-500 py-2 rounded"
            href="/Julius Njeru Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            // download="Julius Njeru Resume.pdf"
          >
            Check my resume
          </a>
        </div>
      </div>
    </section>
  );
};
export default Resume;

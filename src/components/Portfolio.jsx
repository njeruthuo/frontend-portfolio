import ecommerce from "../p-img/ecommerce.png";
import mochere from "../p-img/mochere.png"
import calc from "../p-img/desktop.jpg";
import notification from "../p-img/desktop-design.jpg";
import newsletter from "../p-img/desktop-preview.jpg";
import movies from "../p-img/moviebo.png";

const Portfolio = () => {
  return (
    <section id="portfolio" className="min-h-screen  scroll-pt-20">
      <div className="w-[90%] mx-auto pt-20">
        <h2 className="text-xs ">Portfolio</h2>
        {/* <hr /> */}
        <p className="text-2xl mt-3 text-red-600 border-b-4 border-red-600 sm:w-48">
          My past projects
        </p>

        {/* Flex container */}

        <div id="projects" className="flex flex-wrap mt-8 space-y-4 p-4">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <img src={ecommerce} alt="" />
            <h1>Ecommerce project</h1>
            <p>
              An open-source project written alongside Felex Onyango who is a
              senior developer at Sibasi Ltd. I assisted in revamping the UI.
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <img src={movies} alt="" />
            <h1>MovieBox</h1>
            <p>A solution made from a competition challenge. The solution allows users to browse through the latest movies and series.</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <img src={mochere} alt="" />
            <h1>Mochere Law</h1>
            <p>A web app for a law firm in Nairobi. It highlights the services offered by the firm and how to get in contact</p>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <img src={calc} alt="" />
            <h1>Age calculator</h1>
            <p>
              A frontend mentor challenge solved using ReactJS and TailwindCSS.
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <img src={notification} alt="" />
            <h1>Notifications page</h1>
            <p>
              A frontend mentor challenge solved using ReactJS and TailwindCSS.
            </p>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <img src={newsletter} alt="" />
            <h1>Newsletter SignUp</h1>
            <p>
              A frontend mentor challenge solved using ReactJS and TailwindCSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;

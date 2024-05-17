import { projects } from "../data";

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
          {projects.map((project, index) => {
            const { img, title, description, url } = project;
            return (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <a href={url} target="_blank">
                  <img src={img} alt="" />
                  <h1>{title}</h1>
                  <p>{description}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;

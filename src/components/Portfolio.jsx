import code from "../icons/code.png";

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

        <div className="flex flex-wrap mt-8 space-y-4 p-4">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <img src={code} alt="" />
            <h1>MovieBox</h1>
            <p>A solution made from a competition challenge</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <img src={code} alt="" />
            <h1>Mochere Law</h1>
            <p>A web app for a law firm in Nairobi. It was a part time job</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <img src={code} alt="" />
            <h1>Newsletter SignUp</h1>
            <p>
              A frontend mentor challenge solved using ReactJS and TailwindCSS.
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <img src={code} alt="" />
            <h1>Age calculator</h1>
            <p>
              A frontend mentor challenge solved using ReactJS and TailwindCSS.
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <img src={code} alt="" />
            <h1>Notifications page</h1>
            <p>
              A frontend mentor challenge solved using ReactJS and TailwindCSS.
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <img src={code} alt="" />
            <h1>Ecommerce project</h1>
            <p>
              An open-source project written alongside Felex Onyango who is a
              senior developer at Sibasi Ltd.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;

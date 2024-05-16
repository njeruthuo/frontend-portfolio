import fb from "../icons/fb.png";
import twitter from "../icons/twitter.png";
import linkedin from "../icons/linkedin.png";
import github from "../icons/github-color.svg";
import phone from "../icons/call.png";
import mail from "../icons/mail.png";
import { useState } from "react";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, budget, description } = formData;
    const message = `Hello! I'm ${name}.\nEmail: ${email}\nBudget: ${
      budget || "N/A"
    }\nDescription: ${description}`;
    const phoneNumber = "+254768585724"; // Replace with your WhatsApp number including country code
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = whatsappUrl;
  };
  return (
    <section id="contacts" className="min-h-screen  scroll-pt-20">
      <div className="w-[90%] mx-auto pt-20">
        <h2 className="text-xs ">Contacts</h2>
        {/* <hr /> */}
        <p className="text-2xl mt-3 text-red-600 border-b-4 border-red-600 sm:w-48">
          Lets connect
        </p>

        {/* Flex container */}

        <div className="flex flex-col sm:flex-row">
          <div className="w-1/2 py-8 sm:pr-10">
            <p className="font-bold">
              Lets make something new, different or more meaningful or make
              thing more visual or conceptual?{" "}
              <span className="text-yellow-200">Just say Hello </span>{" "}
            </p>

            <div className="flex flex-col space-y-4 mt-12">
              <p className="text-yellow-200 flex gap-3 place-items-center">
                <img className="h-6" src={phone} alt="" /> 0768585724
              </p>
              <p className="text-yellow-200 flex gap-3 place-items-center">
                {" "}
                <img className="h-6" src={mail} alt="" /> juliusn411@gmail.com |
                njeruthelearner@gmail.com
              </p>
            </div>
            <div className="w-full2 mt-4">
              <div className="flex py-2 justify-center items-center space-x-8">
                <a
                  href="https://web.facebook.com/profile.php?id=100071365170089"
                  target="_blank"
                  className="bg-gray-700 p-2 rounded-full"
                >
                  <img className="w-4" src={fb} alt="Facebook" />
                </a>

                <a
                  href="https://twitter.com/njeru19_njeru/"
                  target="_blank"
                  className="bg-gray-700 p-2 rounded-full"
                >
                  <img className="w-4" src={twitter} alt="Twitter" />
                </a>

                <a
                  href="https://www.linkedin.com/in/julius-njeru-37158924b/"
                  target="_blank"
                  className="bg-gray-700 p-2 rounded-full"
                >
                  <img className="w-4" src={linkedin} alt="LinkedIn" />
                </a>

                <a
                  href="https://www.github.com/njeruthuo"
                  target="_blank"
                  className="bg-gray-700 p-2 rounded-full"
                >
                  <img className="w-4" src={github} alt="GitHUB" />
                </a>
              </div>
            </div>
          </div>

          {/* Email Form */}
          <div className="w-1/2">
            <form
              className="flex flex-col space-y-6  w-[65%] mx-auto"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Mail address"
              />
              <input
                type="number"
                name="budget"
                id="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="Your budget (optional)"
              />
              <input
                type="text"
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Project description"
              />
              <div className="bg-yellow-200 text-black font-light text-sm ml-auto px-4 py-2">
                <button type="submit">HIRE ME</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contacts;

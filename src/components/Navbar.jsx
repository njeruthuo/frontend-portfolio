import fb from "../icons/fb.png";
import twitter from "../icons/twitter.png";
import linkedin from "../icons/linkedin.png";
import github from "../icons/github-color.svg";
import julius from "../icons/jcode.png";
import { useState } from "react";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const styles = `
    ${
      modalOpen ? "flex" : "hidden"
    } backdrop-blur-sm fixed top-0 right-0 h-full w-[250px] z-40 bg-white text-black flex-col space-y-4 items-center pt-12
  `;

  return (
    <header>
      <nav className="bg-slate-950">
        <ul className="flex justify-end place-items-center items-center place-content-center gap-8 py-4 w-[90%] mx-auto">
          <li className="mr-auto">
            <a
              className="hover:text-blue-800 text-red-600 font-bold text-lg"
              href="#home"
            >
              <img className="h-10" src={julius} alt="" />
            </a>
          </li>
          <li className="hidden sm:inline-block listed">
            <a className="hover:text-blue" href="#about">
              About
            </a>
          </li>
          <li className="hidden sm:inline-block listed">
            <a className="hover:text-blue" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="hidden sm:inline-block listed">
            <a className="hover:text-blue" href="#resume">
              Resume
            </a>
          </li>
          <li className="hidden sm:inline-block listed">
            <a className="hover:text-blue" href="#contacts">
              Contacts
            </a>
          </li>

          <li className="hidden sm:flex space-x-4">
            <span className="sm:border-l-2 border-white"></span>
            <a
              href="https://www.github.com/njeruthuo"
              target="_blank"
              className="bg-gray-700 p-2 rounded-full"
            >
              <img className="w-4" src={github} alt="GitHUB" />
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
              href="https://web.facebook.com/profile.php?id=100071365170089"
              target="_blank"
              className="bg-gray-700 p-2 rounded-full"
            >
              <img className="w-4" src={fb} alt="Facebook" />
            </a>
          </li>

          <li
            id="hamburger"
            className="hover:text-blue sm:hidden pr-4 text-5xl pb-4 cursor-pointer"
            onClick={() => setModalOpen(!modalOpen)}
          >
            &#9776;
          </li>
        </ul>

        {/* Mobile menu */}
        <ul className={styles}>
          <li className="w-full hover:bg-gray-200 py-3 pl-8">
            <button
              className="hover:text-blue text-3xl w-full text-left"
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>
          </li>
          <li
            onClick={() => setModalOpen(false)}
            className="w-full hover:bg-gray-200 py-3 pl-8"
          >
            <a className="hover:text-blue" href="#about">
              About
            </a>
          </li>
          <li
            onClick={() => setModalOpen(false)}
            className="w-full hover:bg-gray-200 py-3 pl-8"
          >
            <a className="hover:text-blue" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li
            onClick={() => setModalOpen(false)}
            className="w-full hover:bg-gray-200 py-3 pl-8"
          >
            <a className="hover:text-blue" href="#resume">
              Resume
            </a>
          </li>
          <li
            onClick={() => setModalOpen(false)}
            className="w-full hover:bg-gray-200 py-3 pl-8"
          >
            <a className="hover:text-blue" href="#contacts">
              Contacts
            </a>
          </li>

          <li className="flex space-x-4">
            <span className="border-l-2 border-white"></span>
            <a
              href="https://web.facebook.com/profile.php?id=100071365170089"
              className="bg-gray-700 p-2 rounded-full"
            >
              <img className="w-4" src={fb} alt="Facebook" />
            </a>

            <a
              href="https://twitter.com/njeru19_njeru/"
              className="bg-gray-700 p-2 rounded-full"
            >
              <img className="w-4" src={twitter} alt="Twitter" />
            </a>

            <a
              href="https://www.github.com/njeruthuo"
              target="_blank"
              className="bg-gray-700 p-2 rounded-full"
            >
              <img className="w-4" src={github} alt="GitHUB" />
            </a>

            <a
              href="https://www.linkedin.com/in/julius-njeru-37158924b/"
              className="bg-gray-700 p-2 rounded-full"
            >
              <img className="w-4" src={linkedin} alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

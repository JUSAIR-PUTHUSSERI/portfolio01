import { Link } from "react-scroll";
import { useState } from 'react';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-transparent backdrop-filter backdrop-blur transition">
      <ul className="text-center text-xl py-5">
        <li className="my-2 py-2 hover:text-cyan-400">
          <Link
            activeClass="active"
            to="Profile"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="relative inline-block after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-cyan-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Home
          </Link>
        </li>
        <li className="my-2 py-2 hover:text-cyan-400">
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="relative inline-block after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-cyan-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            About
          </Link>
        </li>
        <li className="my-2 py-2 hover:text-cyan-400">
          <Link
            activeClass="active"
            to="Skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="relative inline-block after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-cyan-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Skills
          </Link>
        </li>
        <li className="my-2 py-2 hover:text-cyan-400">
          <Link
            activeClass="active"
            to="Projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="relative inline-block after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-cyan-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Projects
          </Link>
        </li>
        <li>
          <button
            className="bg-cyan-100 text-blue-950"
            onClick={() => {
              const contactSection = document.getElementsByClassName("contact")[0];
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact Me
          </button>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className="bg-black text-white fixed w-full z-50 top-0">
      <div className="flex justify-between items-center h-16 px-4 lg:px-20">
        <div className="flex items-center text-2xl">
          <h2 className="text-cyan-400">J</h2>
          <h4>usair Jsr</h4>
        </div>
        <div className="lg:flex hidden items-center justify-end font-normal flex-1">
          <ul className="flex gap-8 mr-16 text-[18px] cursor-pointer">
            <li className="hover:text-cyan-400">
              <Link
                activeClass="active"
                to="Profile"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="relative inline-block after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-cyan-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                Home
              </Link>
            </li>
            <li className="hover:text-cyan-400">
              <Link
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="relative inline-block after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-cyan-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                About
              </Link>
            </li>
            <li className="hover:text-cyan-400">
              <Link
                activeClass="active"
                to="Skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="relative inline-block after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-cyan-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                Skills
              </Link>
            </li>
            <li className="hover:text-cyan-400">
              <Link
                activeClass="active"
                to="Projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="relative inline-block after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-cyan-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                Projects
              </Link>
            </li>
            <li>
              <button
                className="bg-cyan-100 text-blue-950 w-40"
                onClick={() => {
                  const contactSection = document.getElementsByClassName("contact")[0];
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contact Me
              </button>
            </li>
          </ul>
        </div>
        <div className="block lg:hidden text-xl" onClick={handleClick}>
          {click ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
        </div>
      </div>
      {click && content}
    </nav>
  );
};

export default Navbar;

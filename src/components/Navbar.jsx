import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import {logo, menu, close } from "../assets";

const Navbar = ({ toggle, setToggle }) => {

  const [active, setActive] = useState(""); //for active nav link

  //solve the issue of active state changing when scrolling later
  useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    let currentSection = "";

    // Define the hero threshold (e.g., height of Hero section)
    const heroSection = document.getElementById("hero"); // Make sure your Hero section has this ID
    const heroHeight = heroSection ? heroSection.clientHeight : 0;

    // If we're still in the Hero section — deactivate everything
    if (scrollPosition < heroHeight - 50) {
      setActive(""); // Nothing should be active
      return;
    }

    // Otherwise, activate the correct nav link
    for (const link of navLinks) {
      const section = document.getElementById(link.id);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - 50 &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = link.title;
          break;
        }
      }
    }

    setActive(currentSection);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  
  return (
    <>
      <nav
      >
        <div className="bdidiv flex flex-col">
          <div className={`${styles.paddingX} w-full flex py-5 fixed top-0 z-20 bg-primary upperdiv justify-between items-center max-w-7xl mx-auto`}>
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              Divya &nbsp;
              <span className="sm:block hidden"> Soni</span>
            </p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((Link) => (
              <li
                key={Link.id}
                className={`${
                  active === Link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(Link.title)}
              >
                <a href={`#${Link.id}`}>{Link.title}</a>
              </li>
            ))}
          </ul>
          <div
            className="sm:hidden 
        flex flex-1 justify-end items-center"
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          </div>
        </div>

        <div
          className={`lowerdiv ${!toggle ? "hidden" : "flex"} 
            fixed sm:hidden h-[250px] bg-primary w-full flex flex-col items-center justify-center top-[60px] z-20`}
        >
          <ul className="list-none flex flex-col gap-4">
            {navLinks.map((Link) => (
              <li
                key={Link.id}
                className={`${
                  active === Link.title ? "text-white" : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(Link.title);
                }}
              >
                <a href={`#${Link.id}`}>{Link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
        
      </nav>
      
    </>
  );
};

export default Navbar;
//active state should change when scrolling and mobile view m overlapping ho rhi h

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll"; // Import from react-scroll
// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets";

// const Navbar = ({ toggle, setToggle }) => {
//   const [active, setActive] = useState(""); // Track active nav link

//   return (
//     <nav>
//       <div className="bdidiv flex flex-col">
//         {/* Navbar Header */}
//         <div
//           className={`${styles.paddingX} w-full flex py-5 fixed top-0 z-20 bg-primary upperdiv justify-between items-center max-w-7xl mx-auto`}
//         >
//           <Link
//             to="/"
//             className="flex items-center gap-2"
//             onClick={() => {
//               setActive("");
//               scroll.scrollToTop(); // Scroll to top on logo click
//             }}
//           >
//             <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
//             <p className="text-white text-[18px] font-bold cursor-pointer flex">
//               Divya &nbsp;
//               <span className="sm:block hidden"> Soni</span>
//             </p>
//           </Link>

//           {/* Desktop Navigation */}
//           <ul className="list-none hidden sm:flex flex-row gap-10">
//             {navLinks.map((link) => (
//               <li key={link.id} className="text-[18px] font-medium cursor-pointer">
//                 <ScrollLink
//                   to={link.id}
//                   smooth={true}
//                   duration={500}
//                   spy={true}
//                   offset={-80} // Adjust for fixed navbar height
//                   className={`${
//                     active === link.title ? "text-white font-bold" : "text-secondary"
//                   } hover:text-white`}
//                   onSetActive={() => setActive(link.title)}
//                 >
//                   {link.title}
//                 </ScrollLink>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Menu Toggle */}
//           <div className="sm:hidden flex flex-1 justify-end items-center">
//             <img
//               src={toggle ? close : menu}
//               alt="menu"
//               className="w-[28px] h-[28px] object-contain cursor-pointer"
//               onClick={() => setToggle(!toggle)}
//             />
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <div
//           className={`lowerdiv ${
//             !toggle ? "hidden" : "flex"
//           } fixed sm:hidden h-[250px] bg-primary w-full flex flex-col items-center justify-center top-[60px] z-20`}
//         >
//           <ul className="list-none flex flex-col gap-4">
//             {navLinks.map((link) => (
//               <li key={link.id} className="text-[16px] font-medium cursor-pointer">
//                 <ScrollLink
//                   to={link.id}
//                   smooth={true}
//                   duration={200}
//                   spy={true}
//                   offset={-80} // Adjust for navbar height
//                   className={`${
//                     active === link.title ? "text-white font-bold" : "text-secondary"
//                   }`}
//                   onClick={() => setToggle(false)}
//                 >
//                   {link.title}
//                 </ScrollLink>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;






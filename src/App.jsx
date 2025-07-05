import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { useEffect, useState } from "react";

const App = () => {
  const [toggle, setToggle] = useState(false); // for hamburger menu
  const [isLaptop, setIsLaptop] = useState(true); // detect if screen is laptop-sized

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsLaptop(mediaQuery.matches);

    const handleResize = (e) => setIsLaptop(e.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div>
          <Navbar toggle={toggle} setToggle={setToggle} />
          {isLaptop && <StarsCanvas />}
          <Hero toggle={toggle} setToggle={setToggle} />
        </div>

        {/* Remove bg class when StarsCanvas is shown in Contact */}
        <div className={isLaptop ? "" : "bg-endless-constellation bg-contain bg-repeat bg-center"}>
          <About toggle={toggle} setToggle={setToggle} />
          <Tech />
          <Works />
          <Contact />
          {isLaptop && <StarsCanvas />}
          </div>
      </div>
    </BrowserRouter>
  );
};

export default App;


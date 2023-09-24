import { React, useState, useEffect } from "react";

function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 420);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <>
      <div className="hero-section flex bg-[#161615] pt-6 max-w-[100%]">
        <ul className="mt-[11rem] align-txt">
          <li>
            <p className="herotext ">Fresh</p>
          </li>

          <li>
            <p className=" herotext middle-h-text">2022</p>
          </li>
          <li>
            {" "}
            <p className="herotext  ">Look</p>
          </li>
        </ul>

        <div className="max-w-full ml-[22.5rem] mobile:ml-[0rem]">
          <div className="hidden mobile:block ">
            <ul className=" text-white heromtext">
              <li>
                <p className="text-[3rem]">Fresh</p>
              </li>

              <li>
                <p className="text-[3rem] ml-[1rem] middle-h-textmobile">
                  2<span className="text-[#1A1110]">022</span>
                </p>
              </li>
              <li>
                <p className="text-[3rem]">Look</p>
              </li>
            </ul>
          </div>

          <img
            src={isMobile ? "Mobile-Hero-Logo.png" : "Hero-Logo.png"}
            alt={isMobile ? "Shopping-Mobile-View" : "Shopping-Desktop-View"}
            className="object-cover "
          />
        </div>
      </div>
    </>
  );
}

export default Hero;

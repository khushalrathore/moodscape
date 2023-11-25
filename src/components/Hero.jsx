import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[90px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-black">30%</span> <span className="text-black"> Off For{" "} </span>
            <span className="text-black">New</span> <span className="text-black"> User{" "} </span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className=" flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-stone-800 ss:leading-[100.8px] leading-[75px]">
            Because <br className="sm:block hidden" />Your Story{" "}
            <span className="text-gradient">Matters</span>{" "}Too
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <p className={`${styles.paragraph} text-stone-500 max-w-[470px] mt-5`}>
          Addressing mental health conditions early is crucial.
          Just as we prioritize prevention for physical ailments like cancer and heart disease, we advocate for proactive mental health care.
          Our commitment is to intervene well before issues reach critical stages, offering support through our services.
        </p>
      </div>

      {!isMobile && (
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>
      )}

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;

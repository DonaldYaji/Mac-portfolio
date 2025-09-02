import styles from "../style";
import { robot } from "../assets"; // Replace this with your portfolio image or avatar
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            👋 Hi, I'm <span className="text-white font-semibold">Donald</span> — Open for Freelance Projects
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            I Build <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Modern Websites</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted label="Hire Me" />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          & Web Experiences.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          I'm a passionate web developer who crafts fast, responsive, and visually engaging
          websites. Let's collaborate to bring your ideas to life!
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="portfolio" className="w-[80%] h-[100%] relative z-[5] rounded-tl-[40%] rounded-br-[40%]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted label="View My Work" />
      </div>
    </section>
  );
};

export default Hero;

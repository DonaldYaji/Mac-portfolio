import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full transition-transform duration-300 hover:scale-105`}
    >
      <div className="flex flex-row items-center">
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Hire</span>
        </p>
        <img
          src={arrowUp}
          alt="arrow-up"
          className="w-[23px] h-[23px] object-contain ml-1"
        />
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Me</span>
      </p>
    </div>
  </div>
);

export default GetStarted;

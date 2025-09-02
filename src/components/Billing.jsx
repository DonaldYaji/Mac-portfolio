import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="billing" className={layout.sectionReverse}>
    {/* Image Section */}
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="Billing dashboard preview"
        className="w-full h-full relative z-[5] object-contain"
      />

      {/* Gradients */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

    {/* Content Section */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Manage your billing <br className="sm:block hidden" /> effortlessly
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Simplify your financial workflow with automated billing and invoicing.
        Track transactions, manage subscriptions, and stay organized with ease.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="Download on the App Store"
          className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer hover:opacity-90 transition"
        />
        <img
          src={google}
          alt="Get it on Google Play"
          className="w-[144px] h-[43px] object-contain cursor-pointer hover:opacity-90 transition"
        />
      </div>
    </div>
  </section>
);

export default Billing;

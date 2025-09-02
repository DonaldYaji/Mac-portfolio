import { clients } from "../constants"; // Replace this with your own data (tools, brands, etc.)
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-8 flex-col`}>
    <h2 className="text-white text-2xl font-bold mb-6">
      Brands & Technologies I Work With
    </h2>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
        >
          <img
            src={client.logo}
            alt={client.name || "logo"}
            className="sm:w-[192px] w-[100px] object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;

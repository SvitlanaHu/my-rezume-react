import styles from "./Aside.module.css";
import { Contacts } from "../Contacts/Contacts";
import myPhoto from "../../assets/photo_me.png";
import { TechSkills } from "../TechSkills/TechSkills";
import { SoftSkills } from "../SoftSkills/SoftSkills";
import { Languages } from "../Languages/Languages";

export const Aside = () => {
  return (
    <aside className={styles.aside_container}>
      <img
        className={styles.my_photo}
        src={myPhoto}
        alt="Svitlana Humen — Front-End Developer"
        width={370}
      />
      <Contacts />
      <TechSkills />
      <SoftSkills />
      <Languages />
    </aside>
  );
};

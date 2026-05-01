import { Download } from "lucide-react";
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
      <a
        className={styles.cv_btn}
        href="/Svitlana_humen_frontend.pdf"
        download="Svitlana_Humen_CV.pdf"
        aria-label="Download CV"
      >
        <Download size={16} strokeWidth={2} />
        Download CV
      </a>

      <Contacts />
      <TechSkills />
      <SoftSkills />
      <Languages />
    </aside>
  );
};

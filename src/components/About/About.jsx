import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.about_me_container}>
      <h1 className={styles.my_name}>Svitlana Humen</h1>
      <h2 className={styles.my_profession}>Front-End Developer</h2>
      <p className={styles.my_description}>
        Відповідальна, стресостійка, гнучка, комунікабельна. Мій девіз: "Якщо
        спіткала невдача, значить треба докласти трішки більше зусиль".
      </p>
    </section>
  );
};

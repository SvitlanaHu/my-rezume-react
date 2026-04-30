import styles from "../TechSkills/TechSkills.module.css";

const skills = ["Scrum", "Agile", "GTD", "Teamwork"];

export const SoftSkills = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.sidebar_title}>Soft Skills</h2>
      <ul className={styles.skills_list}>
        {skills.map((skill) => (
          <li key={skill} className={styles.skills_item}>
            <span className={styles.skills_text}>{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

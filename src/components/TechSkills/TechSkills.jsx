import styles from "./TechSkills.module.css";

const skills = [
  "HTML5",
  "CSS3",
  "GIT",
  "WebPack",
  "JavaScript",
  "React.js",
  "Node.js",
];

export const TechSkills = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.sidebar_title}>Tech Skills</h2>
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

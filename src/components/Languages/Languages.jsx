import styles from "./Languages.module.css";

const languages = [
  { name: "Ukrainian", level: "Native", percent: 100 },
  { name: "Polish", level: "Intermediate", percent: 60 },
  { name: "Russian", level: "Fluent", percent: 90 },
  { name: "English", level: "Elementary (reading)", percent: 25 },
];

export const Languages = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.sidebar_title}>Languages</h2>
      <ul className={styles.lang_list}>
        {languages.map(({ name, level, percent }) => (
          <li key={name} className={styles.lang_item}>
            <div className={styles.lang_header}>
              <span className={styles.lang_name}>{name}</span>
              <span className={styles.lang_level}>{level}</span>
            </div>
            <div className={styles.lang_bar_track}>
              <div
                className={styles.lang_bar_fill}
                style={{ width: `${percent}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

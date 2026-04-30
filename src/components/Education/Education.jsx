import styles from "./Education.module.css";

const education = [
  {
    place: "Lviv Polytechnic National University",
    speciality: "Engineer-Mathematician",
    period: "September 1990 - June 1995",
    location: "Lviv, Ukraine",
  },
];

export const Education = () => {
  return (
    <section className={styles.education_container}>
      <h2 className={styles.main_content_title}>Education</h2>
      <ul className={styles.education_list}>
        {education.map(({ place, speciality, period, location }) => (
          <li key={place} className={styles.education_item}>
            <h3 className={styles.education_place}>{place}</h3>
            <p className={styles.education_speciality}>{speciality}</p>
            <p className={styles.work_period}>
              {period} / {location}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

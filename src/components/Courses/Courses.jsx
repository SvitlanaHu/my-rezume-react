import styles from "./Courses.module.css";

const courses = [
  {
    place: "GoIT marathon on HTML/CSS",
    speciality: "Website builder",
    period: "25 June 2023 - 1 July 2023",
    location: "Lviv, Ukraine",
    certificate: "FS_950245590",
  },
  {
    place: "GoIT",
    speciality: "Full Stack Developer",
    period: "July 2023 - April 2024",
    location: "Lviv, Ukraine",
    certificate: "Unique ID 27317",
  },
];

export const Courses = () => {
  return (
    <section className={styles.courses_container}>
      <h2 className={styles.main_content_title}>Courses</h2>
      <ul className={styles.courses_list}>
        {courses.map(({ place, speciality, period, location, certificate }) => (
          <li key={place} className={styles.courses_item}>
            <h3 className={styles.education_place}>{place}</h3>
            <p className={styles.education_speciality}>{speciality}</p>
            <p className={styles.work_period}>
              {period} / {location}
            </p>
            {certificate && (
              <p className={styles.certificate}>Certificate: {certificate}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

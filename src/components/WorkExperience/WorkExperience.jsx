import { useState } from "react";
import styles from "./WorkExperience.module.css";

const workExperience = [
  {
    position: "Спеціаліст ІІ категорії",
    company:
      "Львівська міська рада народних депутатів. Виконавчий комітет Шевченківської райадміністрації. Відділ для надання субсидій по відшкодуванню витрат на оплату житлово-комунальних послуг",
    period: "27.12.1995 - 29.09.2000 | Ukraine",
    duties: [
      "Робота з базою даних",
      "Внесення даних громадян, згідно їх звернень",
      "Внесення змін при повторних зверненнях",
      "Особистий прийом громадян",
    ],
    achievements: [
      "Спеціаліст",
      "Спеціаліст ІІ категорії",
      "Присвоєно 7 категорію 15 ранг",
      "Присвоєно 7 категорію 14 ранг",
    ],
  },
  {
    position: "Продавець-консультант",
    company: "Магазин-салон мобільного зв'язку «ТЕХНОЛЮКС», ФОП Пасько А.І.",
    period: "01.10.2000 - 31.05.2002 | Ukraine",
    duties: [
      "Надання консультацій потенційним покупцям щодо можливостей засобів зв'язку",
      "Підключення клієнтів на контрактній основі до оператора зв'язку ЮМС",
      "Надання послуг з безконтрактного підключення",
      "Допомога покупцям у здійсненні покупки",
      "Робота в 1С",
    ],
    achievements: [],
  },
  {
    position: "Менеджер торгового відділу",
    company: "ПП КРУПС",
    period: "01.06.2002 - 30.09.2011 | Ukraine",
    duties: [
      "Робота з дрібногуртовими покупцями",
      "Закупка певних груп товарів",
      "Робота в 1С (розширена версія)",
    ],
    achievements: [],
  },
  {
    position: "Підприємець",
    company: "ФОП Гумен С.С.",
    period: "22.02.2008 - дотепер | Ukraine",
    duties: [
      "Робота з покупцями по схемі дропшипінгу",
      "Репетиторство з математики",
    ],
    achievements: [],
  },
];

const VISIBLE_COUNT = 2;

export const WorkExperience = () => {
  const [showAll, setShowAll] = useState(false);
  const total = workExperience.length;
  const reversed = [...workExperience].reverse();
  const visible = showAll ? reversed : reversed.slice(0, VISIBLE_COUNT);

  return (
    <section className={styles.work_experience_container}>
      <h2 className={styles.main_content_title}>Work Experience</h2>
      <div className={styles.work_list}>
        {visible.map(({ position, company, period, duties, achievements }) => (
          <div key={position} className={styles.work_experience_place}>
            <h3 className={styles.work_experience_position}>{position}</h3>
            <p className={styles.work_experience_company}>{company}</p>
            <p className={styles.work_period}>{period}</p>
            <ul className={styles.work_duties_list}>
              {duties.map((duty) => (
                <li key={duty} className={styles.work_duties}>
                  {duty}
                </li>
              ))}
            </ul>
            {achievements.length > 0 && (
              <>
                <p className={styles.progress}>Досягнення:</p>
                <ul className={styles.progress_list}>
                  {achievements.map((achievement) => (
                    <li key={achievement} className={styles.work_duties}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
      {total > VISIBLE_COUNT && (
        <button
          className={styles.toggle_btn}
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show less ↑" : `Show more (${total - VISIBLE_COUNT}) ↓`}
        </button>
      )}
    </section>
  );
};

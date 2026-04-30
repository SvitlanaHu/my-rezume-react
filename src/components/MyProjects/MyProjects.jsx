import styles from "./MyProjects.module.css";

const projects = [
  {
    name: "WebStudio",
    href: "https://svitlanahu.github.io/goit-markup-hw-06/index.html",
    githubHref: "https://github.com/SvitlanaHu/goit-markup-hw-06",
    description:
      "Responsive layout website. Custom project built on GitHub, tested for build errors and page performance in real time.",
    role: "Developer",
    tags: ["HTML", "CSS3"],
    ariaLabel: "WebStudio — responsive layout website, HTML, CSS3",
  },
  {
    name: "FocusFrame",
    href: "https://olichkakhamuliak.github.io/photography-school/",
    githubHref: "https://github.com/OlichkaKhamuliak/photography-school",
    description:
      "Responsive layout website. Team project built on GitHub with Vite, tested for build errors and page performance in real time.",
    role: "Developer",
    tags: ["HTML", "CSS3"],
    ariaLabel: "FocusFrame — photography school team project, HTML, CSS3",
  },
  {
    name: "UkraineFuture",
    href: "https://svitlanahu.github.io/forum-ukraine-of-the-future-2.0/",
    githubHref: "https://github.com/SvitlanaHu/forum-ukraine-of-the-future-2.0",
    description:
      "Responsive layout website. Pet project created for photo coverage of the Ukraine Forum of the Future 2.0 event in Lviv, with single and bulk photo upload.",
    role: "Developer",
    tags: ["HTML", "CSS3", "JS"],
    ariaLabel:
      "UkraineFuture — forum photo coverage pet project, HTML, CSS3, JS",
  },
  {
    name: "FoodBoutique",
    href: "https://svitlanahu.github.io/js-product/index.html",
    githubHref: "https://github.com/SvitlanaHu/js-product",
    description:
      "Responsive layout website. Team project built on GitHub with Vite. First experience as a Team Lead.",
    role: "Team Lead, Developer",
    tags: ["HTML", "CSS3", "JS"],
    ariaLabel: "FoodBoutique — team project, Team Lead, HTML, CSS3, JS",
  },
  {
    name: "Phonebook",
    href: "https://goit-react-hw-08-sage.vercel.app/",
    githubHref: "https://github.com/SvitlanaHu/goit-react-hw-08",
    description:
      "Responsive layout website. Individual project built on GitHub using React.",
    role: "Developer",
    tags: ["HTML", "CSS3", "JS", "React"],
    ariaLabel: "Phonebook — individual React project",
  },
];

export const MyProjects = () => {
  return (
    <section className={styles.project_container}>
      <h2 className={styles.main_content_title}>Projects</h2>
      <ol className={styles.project_list}>
        {projects.map(
          ({ name, href, githubHref, description, role, tags, ariaLabel }) => (
            <li key={href} className={styles.project_item}>
              <div className={styles.project_item_links}>
                <a
                  className={styles.project_item_link}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                >
                  {name}
                </a>
                <a
                  className={styles.project_item_github}
                  href={githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} GitHub repository`}
                >
                  GitHub
                </a>
              </div>
              <span className={styles.project_item_role}>Position: {role}</span>
              <span className={styles.project_item_descr}>{description}</span>
              <ul className={styles.project_item_tags}>
                {tags.map((tag) => (
                  <li key={tag} className={styles.project_item_tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          )
        )}
      </ol>
    </section>
  );
};

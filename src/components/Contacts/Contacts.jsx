import styles from "./Contacts.module.css";

const ICON_PATH = "/symbol-defs.svg";

const socialLinks = [
  {
    href: "https://github.com/SvitlanaHu",
    icon: "icon-github",
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/svitlana-humen-7029a7204",
    icon: "icon-linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://t.me/Svitolada",
    icon: "icon-telegram",
    label: "Telegram",
  },
  {
    href: "viber://chat?number=+380638461689",
    icon: "icon-viber",
    label: "Viber",
  },
  {
    href: "https://wa.me/380638461689",
    icon: "icon-whatsapp",
    label: "WhatsApp",
  },
];

export const Contacts = () => {
  return (
    <address className={styles.contacts_container}>
      <h2 className={styles.sidebar_title}>Contacts</h2>

      <ul className={styles.contacts_box}>
        <li className={styles.contacts_item}>
          <a className={styles.contacts_link} href="tel:+380638461689">
            <svg className={styles.icon} width="20" height="20">
              <use href={`${ICON_PATH}#icon-phone`} />
            </svg>
            <span>+380 63 846 16 89</span>
          </a>
        </li>

        <li className={styles.contacts_item}>
          <a
            className={styles.contacts_link}
            href="mailto:svitoladah@gmail.com"
          >
            <svg className={styles.icon} width="20" height="20">
              <use href={`${ICON_PATH}#icon-mail`} />
            </svg>
            <span>svitoladah@gmail.com</span>
          </a>
        </li>
      </ul>

      <ul className={styles.social_list}>
        {socialLinks.map(({ href, icon, label }) => (
          <li key={label}>
            <a
              className={styles.social_link}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <svg className={styles.icon} width="22" height="22">
                <use href={`${ICON_PATH}#${icon}`} />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </address>
  );
};

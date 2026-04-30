import { Phone, Mail } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaViber,
  FaWhatsapp,
} from "react-icons/fa";
import styles from "./Contacts.module.css";

const socialLinks = [
  {
    href: "https://github.com/SvitlanaHu",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/svitlana-humen-7029a7204",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://t.me/Svitolada",
    icon: FaTelegram,
    label: "Telegram",
  },
  {
    href: "viber://chat?number=+380638461689",
    icon: FaViber,
    label: "Viber",
  },
  {
    href: "https://wa.me/380638461689",
    icon: FaWhatsapp,
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
            <Phone size={18} strokeWidth={1.8} />
            <span>+380 63 846 16 89</span>
          </a>
        </li>
        <li className={styles.contacts_item}>
          <a
            className={styles.contacts_link}
            href="mailto:svitoladah@gmail.com"
          >
            <Mail size={18} strokeWidth={1.8} />
            <span>svitoladah@gmail.com</span>
          </a>
        </li>
      </ul>

      <ul className={styles.social_list}>
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <li key={label}>
            <a
              className={styles.social_link}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          </li>
        ))}
      </ul>
    </address>
  );
};

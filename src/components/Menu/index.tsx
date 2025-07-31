import {
  HistoryIcon,
  HouseIcon,
  SettingsIcon,
  SunIcon,
  TimerIcon,
} from "lucide-react";
import styles from "./styles.module.css";

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href="#home">
        <HouseIcon />
      </a>
      <a className={styles.menuLink} href="#tasks">
        <HistoryIcon />
      </a>
      <a className={styles.menuLink} href="#config">
        <SettingsIcon />
      </a>
      <a className={styles.menuLink} href="#darkmode">
        <SunIcon />
      </a>
    </nav>
  );
}

import Image from "next/image";
import heart from "../../public/heart.svg";
import search from "../../public/search-normal.svg";
import shopping from "../../public/shopping-bag.svg";
import profile from "../../public/profile.svg";
import arrow from "../../public/arrow-left.svg";
import applogo from "../../public/Logo.svg";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <div className={styles["head-panel"]}>
      <div>
        <Image src={applogo} alt="logo" width={36} className={styles["app-logo"]}  />
      </div>
      <div className={styles["logo"]}>LOGO</div>
      
      <div className={styles["icons"]}>
        <a href="#" className={styles["icon1"]}>
          <Image src={search} alt="logo" width={24} />
        </a>
        <a href="#" className={styles["icon2"]}>
          <Image src={heart} alt="logo" width={24} />
        </a>
        <a href="#" className={styles["icon3"]}>
          <Image src={shopping} alt="logo" width={24} />
        </a>
        <a href="#" className={styles["icon4"]}>
          <Image src={profile} alt="logo" width={24} />
        </a>
        <a href="#" className={styles["icon5"]}>
          ENG
          <Image src={arrow} alt="logo" width={16} />
        </a>
      </div>
      </div>

      <nav className={styles["nav"]}>
        <a href="#" className={styles["nav-link"]}>
          SHOP
        </a>
        <a href="#" className={styles["nav-link"]}>
          SKILLS
        </a>
        <a href="#" className={styles["nav-link"]}>
          STORIES
        </a>
        <a href="#" className={styles["nav-link"]}>
          ABOUT
        </a>
        <a href="#" className={styles["nav-link"]}>
          CONTACT US
        </a>
      </nav>
    </header>
  );
}

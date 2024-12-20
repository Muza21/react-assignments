import { memo } from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div>
          <span></span>
          <h1>to-do now</h1>
          <span></span>
        </div>
        <div>
          <span className={styles.line}></span>
          <img src="NotePencil.svg" alt="" />
          <span className={styles.line}></span>
        </div>
      </header>
    </>
  );
};

export default memo(Header);

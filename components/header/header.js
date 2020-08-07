// Dependencies
import React, { useState } from "react";
import Link from "next/link";

// Assets
import styles from "./header.module.css";

export default function Header() {
  // variables
  const links = [
    { title: "Home", url: "#" },
    { title: "About", url: "#" },
    { title: "Contact", url: "#" }
  ];
  const [navOpen, setnavOpen] = useState(false);

  return (
    <div id={styles.navId}>
      <div className={`${styles.navWrapper} ${navOpen ? styles.navOpen : ""}`}>
        <div
          className={`${styles.menuButton} ${navOpen ? styles.menuOpen : ""}`}
          onClick={() => setnavOpen(!navOpen)}
        >
          <div className={styles.menuIcon}></div>
        </div>
        <nav>
          <ul>
            {links.map((link, index) => (
              <li key={index} className={styles.listItem}>
                <Link href={link.url}>
                  <a onClick={() => setnavOpen(!navOpen)}>{link.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

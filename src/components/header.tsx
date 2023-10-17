import Image from "next/image";

import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <section className={styles.header}>
      {/* <Image src="/nps-logo.svg" alt="NPS logo" width={50} height={50} /> */}
      <div className={styles.title}>
        <h1>NPS</h1>
        <h2>The National Park Squiz</h2>
      </div>
    </section>
  );
}

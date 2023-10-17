import Image from "next/image";

import { Data } from "@/pages";
import styles from "@/styles/Quiz.module.css";

export default function Quiz({ data }: { data: Data }) {
  console.log(data);
  return <section className={styles.root}></section>;
}

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>NPS</title>
        <meta
          name="description"
          content="NPS: a National Park Squiz. Thanks for playing :)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>NPS</h1>
        <h2>National Park Squiz</h2>
        <p>Good luck, chuck.</p>
      </main>
    </>
  );
}

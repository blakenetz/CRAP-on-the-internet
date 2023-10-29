import type { InferGetStaticPropsType } from "next";

import Head from "next/head";

import Quiz from "@/components/npsQuiz";
import styles from "@/styles/Home.module.css";
import { getNPSData } from "@/util";

export const getStaticProps = async () => await getNPSData();

export default function Home({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>C.R.A.P.</title>
        <meta
          name="description"
          content="CRAP. A shitty place on the internet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light only" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.root}>
        <Quiz data={data} />
      </section>
    </>
  );
}

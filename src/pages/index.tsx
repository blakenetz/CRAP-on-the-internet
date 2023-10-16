"use client";

import styles from "@/styles/Home.module.css";

import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

import { getRandomIntInclusive, getRandomStateCode } from "@/util";
import { devData } from "@/data/devData";

const inter = Inter({ subsets: ["latin"] });

const headers = new Headers({ method: "GET" });
headers.append("X-Api-Key", process.env.NPS_API_KEY!);

const limit = 100;

type Data = {
  title: string;
  imageUrl: string;
  stateCode: string;
  park: string;
};

export const getStaticProps = (async () => {
  if (process.env.NODE_ENV === "development") {
    return { props: { data: devData } };
  }

  const params = new URLSearchParams([
    ["stateCode", getRandomStateCode()],
    ["q", "animals"],
    ["limit", limit.toString()],
  ]).toString();

  const res = await fetch(
    "https://developer.nps.gov/api/v1/multimedia/galleries/assets?" + params,
    { headers }
  );
  const { data, total } = await res.json();

  const max = total <= limit ? total : limit;
  const { permalinkUrl, relatedParks, title } =
    data[getRandomIntInclusive(max)];

  return {
    props: {
      data: {
        title,
        imageUrl: permalinkUrl,
        stateCode: relatedParks[0].states,
        park: relatedParks[0].fullName,
      },
    },
  };
}) satisfies GetStaticProps<{
  data: Data;
}>;

export default function Home({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(data);

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
      <main className={`${styles.main} ${inter.className}`}></main>
    </>
  );
}

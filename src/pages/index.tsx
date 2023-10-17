import type { GetStaticProps, InferGetStaticPropsType } from "next";

import Head from "next/head";

import { devData } from "@/data/devData";
import { getRandomIntInclusive, getRandomStateCode } from "@/util";
import Quiz from "@/components/quiz";

// Request stuff
export type Data = {
  title: string;
  imageInfo: { url: string; width: number; height: number; alt: string };
  stateCode: string;
  park: string;
};

const headers = new Headers({ method: "GET" });
headers.append("X-Api-Key", process.env.NPS_API_KEY!);

const limit = 100;

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
  const { fileInfo, relatedParks, title, description } =
    data[getRandomIntInclusive(max)];

  return {
    props: {
      data: {
        title,
        park: relatedParks[0].fullName,
        imageInfo: { ...fileInfo, alt: description },
        stateCode: relatedParks[0].states,
      },
    },
  };
}) satisfies GetStaticProps<{
  data: Data;
}>;

export default function Home({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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

      <Quiz data={data} />
    </>
  );
}

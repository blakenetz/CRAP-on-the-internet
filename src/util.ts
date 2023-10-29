import { states } from "./data/stateCodes";
import { devData } from "./data/devData";
import { GetStaticPropsResult } from "next";

const stateCodes = Object.keys(states);

/** @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive */
function getRandomIntInclusive(max: number) {
  return Math.floor(Math.random() * (max - 1));
}

function getRandomNumber() {
  return getRandomIntInclusive(stateCodes.length - 1);
}

function getRandomStateCode() {
  return stateCodes[getRandomNumber()];
}

export type NPSData = {
  park: string;
  stateCode: string;
  latLong: string;
  states: string[];
  description: string;
  fullName: string;
  images: { altText: string; url: string; title: string }[];
};

export async function getNPSData(): Promise<
  GetStaticPropsResult<{ data: NPSData }>
> {
  // return early in dev mode
  if (process.env.NODE_ENV === "development") {
    return { props: { data: devData } };
  }

  const endpoint = "https://developer.nps.gov/api/v1/parks";

  const stateCode = getRandomStateCode();
  const params = new URLSearchParams({ stateCode }).toString();

  const headers = new Headers({ method: "GET" });
  headers.append("X-Api-Key", process.env.NPS_API_KEY!);

  const res = await fetch(endpoint + "?" + params, { headers });
  const { name, latLong, states, description, fullName, images } = await res
    .json()
    .then(({ data }) => data[0]);

  return {
    props: {
      data: {
        park: name,
        stateCode: stateCode,
        latLong: latLong,
        states: states.split(","),
        description,
        fullName,
        images,
      },
    },
  };
}

import "@/styles/globals.css";
import "semantic-ui-css/semantic.min.css";

import type { AppProps } from "next/app";

import localFont from "next/font/local";
import { Inter } from "next/font/google";

// fonts
const inter = Inter({ subsets: ["latin"] });
const nationalPark = localFont({
  src: [
    {
      path: "../../public/fonts/NationalPark-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../../public/fonts/NationalPark-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/NationalPark-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/NationalPark-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/NationalPark-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/NationalPark-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/NationalPark-ExtraBold.ttf",
      weight: "800",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.className} ${nationalPark.className}`}>
      <Component {...pageProps} />;
    </main>
  );
}

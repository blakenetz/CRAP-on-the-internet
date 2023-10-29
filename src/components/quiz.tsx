import Image from "next/image";

import { Data } from "@/pages";
import styles from "@/styles/Quiz.module.css";
import React from "react";

export default function Quiz({ data }: { data: Data }) {
  const [value, setValue] = React.useState("");
  const [showImage, setShowImage] = React.useState(false);

  const handleChange = React.useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >((e) => setValue(e.target.value), []);

  const handleSubmit = React.useCallback(() => {}, []);

  const handleKeyDown = React.useCallback<
    React.KeyboardEventHandler<HTMLInputElement>
  >(
    (e) => {
      if (e.code === "Enter") {
        handleSubmit();
      }
    },
    [handleSubmit]
  );

  const handleHint = React.useCallback(() => setShowImage(true), []);

  console.log(data);
  return (
    <section className={styles.root}>
      <div id="label">
        <h3>Alright you sumbitch, where is</h3>
        <p className={styles.park}>{data.park}</p>
      </div>
      <form>
        <input
          value={value}
          onChange={handleChange}
          aria-labelledby="label"
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSubmit}>Guess</button>
      </form>

      <button className={styles.hint} onClick={handleHint}>
        Need a hint?
      </button>

      {showImage && (
        <div>
          <Image src={data.imageInfo.url} alt={data.imageInfo.alt} />
        </div>
      )}
    </section>
  );
}

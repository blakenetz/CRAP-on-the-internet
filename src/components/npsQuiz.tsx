import Image from "next/image";

import styles from "@/styles/Quiz.module.css";
import React from "react";
import { NPSData } from "@/util";

export default function Quiz({ data }: { data: NPSData }) {
  const [value, setValue] = React.useState("");

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

  return (
    <section className={styles.root}>
      <div id="label">
        <h3>Alright you sumbitch, where is:</h3>
        <p className={styles.park}>{data.park}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={handleChange}
          aria-labelledby="label"
          onKeyDown={handleKeyDown}
        />
        <button type="submit">Guess</button>
      </form>
    </section>
  );
}

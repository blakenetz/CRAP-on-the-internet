import Image from "next/image";

import React from "react";
import Select, { OptionsOrGroups, SelectInstance } from "react-select";

import styles from "@/styles/Quiz.module.css";
import { NPSData } from "@/util";
import { states } from "@/data/stateCodes";

const options = Object.keys(states).map((key) => ({
  value: key,
  label: states[key as keyof typeof states],
}));

export default function Quiz({ data }: { data: NPSData }) {
  const ref = React.useRef<SelectInstance>(null);
  const [invalid, setInvalid] = React.useState(false);

  const handleSubmit = React.useCallback<
    React.FormEventHandler<HTMLFormElement>
  >(
    (e) => {
      e.preventDefault();
      const value = ref.current?.getValue()[0];
      if (value !== data.stateCode) {
        setInvalid(true);
      }
    },
    [data.stateCode]
  );

  const handleFocus = () => ref.current?.setValue("", "deselect-option");

  return (
    <section className={styles.root}>
      <div id="label">
        <h3>Alright you sumbitch, where is:</h3>
        <p className={styles.park}>{data.park}</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className={[styles.root, styles.form].join(" ")}
      >
        <Select
          options={options}
          aria-labelledby="label"
          name="answer"
          className={invalid ? styles.error : ""}
          ref={ref}
          aria-invalid={invalid}
          placeholder=""
          onChange={() => setInvalid(false)}
          onFocus={handleFocus}
        />

        {invalid && <p>Wrong! try again</p>}

        <button type="submit">Guess</button>
      </form>
    </section>
  );
}

"use client";

import User from "../../components/UI/User";
import Options from "../../components/UI/Options";
import classes from "./page.module.css";

export default function Home() {
  return (
    <main className={classes.main}>
      <section className={classes.userContainer}>
        <User />
      </section>
      <section className={classes.optionsContainer}>
        <Options />
      </section>
    </main>
  );
}

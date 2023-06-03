"use client";

import ImageStack from "../../../../components/UI/ImageStack";
import SignUp from "../../../../components/Forms/signup";
import classes from "./page.module.css";

export default function Home() {
  return (
    <main className={classes.main}>
      <section className={classes.formContainer}>
        <SignUp />
      </section>
      <section className={classes.imageContainer}>
        <ImageStack />
      </section>
    </main>
  );
}

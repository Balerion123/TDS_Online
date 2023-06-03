"use client";
import Image from "next/image";

import Login from "../../../../components/Forms/login";
import ImageStack from "../../../../components/UI/ImageStack";
import classes from "./page.module.css";

export default function Home() {
  return (
    <main className={classes.main}>
      <section className={classes.formContainer}>
        <Login />
      </section>
      <section className={classes.imageContainer}>
        <ImageStack />
      </section>
    </main>
  );
}

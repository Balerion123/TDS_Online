import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";

import io from "socket.io-client";
const socket = io("http://localhost:8001");

export default function Home() {
  function onSubmitHandler(event: any) {
    event.preventDefault();
    console.log("submitting");
    socket.emit("send_message", {
      message: "hello world",
    });
  }

  useEffect(() => {
    socket.on("receive_message", (message) => {
      console.log(message);
    });
  }, []);

  return (
    <main className={styles.main}>
      <form onSubmit={onSubmitHandler}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

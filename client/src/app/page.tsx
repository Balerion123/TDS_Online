"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";

import io from "socket.io-client";
const socket = io("http://localhost:8001");

export default function Home() {
  useEffect(() => {
    socket.on("receive_message", (message) => {
      console.log(message);
    });
  }, []);

  function onSubmitHandler(event: React.FormEvent) {
    event.preventDefault();
    console.log("submitting");
    socket.emit("send_message", {
      message: "hello world",
    });
  }

  return (
    <main className={styles.main}>
      <form onSubmit={onSubmitHandler}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";
import classes from "./page.module.css";
import io from "socket.io-client";

const socket = io("http://localhost:8001");

function LiveGame() {
  useEffect(() => {
    console.log("trying to join game");
    socket.emit("join_game", "8pEbEaht");
    socket.on("receive_message", (message) => {
      console.log(message);
    });
  }, []);
  return <main className={classes.game}></main>;
}

export default LiveGame;

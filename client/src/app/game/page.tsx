"use client";

import Input from "../../../components/Forms/input";
import { useState } from "react";
// import { useRouter } from "next/router";
import classes from "./page.module.css";

function Game() {
  const [meetingId, setMeetingId] = useState("");
  // const router = useRouter();

  function onSubmitHandler(event: React.FormEvent) {
    event.preventDefault();
    // router.push(`./${meetingId}`);
  }

  function getMeetingId(meetingId: string) {
    setMeetingId(meetingId);
  }

  return (
    <main className={classes.game}>
      <form onSubmit={onSubmitHandler}>
        <h2>Enter Room Code</h2>
        <Input
          type="text"
          name="meeting-code-tds"
          placeholder="abcabcabc"
          sendData={getMeetingId}
        ></Input>
      </form>
    </main>
  );
}

export default Game;

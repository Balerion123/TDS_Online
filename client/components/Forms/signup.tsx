import Input from "./input";
import { useState } from "react";
import classes from "./signup.module.css";

function SignUp() {
  function onSubmitHandler(event: React.FormEvent) {
    event.preventDefault();
    console.log({ username, email, password });
  }

  function getUsername(props: string) {
    setUsername(props);
  }

  function getEmail(props: string) {
    setEmail(props);
  }

  function getPassword(props: string) {
    setPassword(props);
  }

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <h2>Create your account</h2>
      <Input
        type="text"
        placeholder="Username"
        name="usernameTDS"
        sendData={getUsername}
      />
      <Input
        type="email"
        placeholder="Email"
        name="emailTDS"
        sendData={getEmail}
      />
      <Input
        type="password"
        placeholder="Password"
        name="passwordTDS:"
        sendData={getPassword}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;

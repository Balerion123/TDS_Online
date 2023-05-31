import Input from "./input";
import { useState } from "react";
import classes from "./login.module.css";

function Login() {
  function onSubmitHandler(event: React.FormEvent) {
    event.preventDefault();
    console.log({ username: username, password: password });
  }

  function getUsername(props: string) {
    setUsername(props);
  }

  function getPassword(props: string) {
    setPassword(props);
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <h2>Login to your account</h2>
      <Input
        type="text"
        placeholder="Username"
        name="usernameTDS"
        sendData={getUsername}
      />
      <Input
        type="password"
        placeholder="Password"
        name="passwordTDS:"
        sendData={getPassword}
      />
      <button type="submit">Login</button>
      <div>
        <span>Not signed in yet?</span>
        <button className={classes.signInButton} type="button">
          sign in
        </button>
      </div>
    </form>
  );
}

export default Login;

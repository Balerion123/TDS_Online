import LinkButton from "../Reusable/LinkButton";
import classes from "./Options.module.css";

function Options() {
  return (
    <div className={classes.options}>
      <LinkButton href="./questions" type="dark">
        My Questions
      </LinkButton>
      <LinkButton href="./change-username" type="dark">
        Change Username
      </LinkButton>
      <LinkButton href="./game" type="light">
        Join Public Game
      </LinkButton>
      <LinkButton href="./game" type="light">
        Join Private Game
      </LinkButton>
    </div>
  );
}

export default Options;

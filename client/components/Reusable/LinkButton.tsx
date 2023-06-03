import React, { ReactNode } from "react";
import Link from "next/link";
import classes from "./LinkButton.module.css";

type LinkButtonProps = {
  children: ReactNode;
  className?: string | null;
  href: string;
  type: "light" | "dark";
};

function LinkButton(props: LinkButtonProps) {
  return (
    <Link
      href={props.href}
      className={`${classes.button} ${classes[props.type]} ${props.className}`}
    >
      {props.children}
    </Link>
  );
}

export default LinkButton;

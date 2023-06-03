import { Inter } from "next/font/google";
import classes from "./layout.module.css";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowUpLeft } from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ["latin"] });

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main lang="en" className={classes.pageContainer}>
      <nav className={classes.sidebar}>
        <Link href="../" className={classes.link}>
          {/* <FontAwesomeIcon icon={faArrowUpLeft} /> */}
          <p>Exit Game</p>
        </Link>
      </nav>
      <section>{children}</section>
    </main>
  );
}

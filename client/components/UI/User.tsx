import Image from "next/image";
import profilePic from "../../public/Hanma shuji_Hanma_Tokyo revengers.jpg";

import classes from "./User.module.css";

function User() {
  return (
    <div className={classes.user}>
      <div className={classes.imageContainer}>
        <div className={classes.image}>
          <Image
            src={profilePic}
            alt="profile-pic"
            width={250}
            placeholder="blur"
            priority={false}
            height={250}
          />
        </div>
      </div>
      <div className={classes.detailsContainer}>
        <p>Username : adityaparmar</p>
        <p>Games Played : 20</p>
        <p>Truths Created : 40</p>
        <p>Situations Created : 40</p>
        <p>Player Rating : 0</p>
      </div>
    </div>
  );
}

export default User;

import Image from "next/image";
import classes from "./ImageStack.module.css";
import profile1 from "../../public/Hanma shuji_Hanma_Tokyo revengers.jpg";
import profile2 from "../../public/Emma __ The Promised Neverland.jpg";
import profile3 from "../../public/Hinata Shoyou_Hinata_Haikyuu_Karasuno.jpg";
import profile4 from "../../public/Himiko toga__3.jpg";
import profile5 from "../../public/Iguro obanai.jpg";
import profile6 from "../../public/Saitama sensei.jpg";
import profile7 from "../../public/Sukuna pfp.jpg";

function ImageStack() {
  return (
    <div className={classes.imageContainer}>
      <div>
        <Image
          src={profile1}
          placeholder="blur"
          priority={false}
          alt="profile-image"
          width={200}
          height={200}
        />
      </div>
      <div>
        <Image
          src={profile2}
          placeholder="blur"
          priority={false}
          alt="profile-image"
          width={200}
          height={200}
        />
      </div>
      <div>
        <Image
          src={profile3}
          placeholder="blur"
          priority={false}
          alt="profile-image"
          width={200}
          height={200}
        />
      </div>
      <div>
        <Image
          src={profile4}
          placeholder="blur"
          priority={false}
          alt="profile-image"
          width={200}
          height={200}
        />
      </div>
      <div>
        <Image
          src={profile5}
          placeholder="blur"
          priority={false}
          alt="profile-image"
          width={200}
          height={200}
        />
      </div>
      <div>
        <Image
          src={profile6}
          placeholder="blur"
          priority={false}
          alt="profile-image"
          width={200}
          height={200}
        />
      </div>
      <div>
        <Image
          src={profile7}
          placeholder="blur"
          priority={false}
          alt="profile-image"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}

export default ImageStack;

import styles from "./HeaderProfile.module.css";
import {useState} from "react";
import profileDefault from "../../assets/profileDefault.png";
import DogInfo from "../DogInfo/DogInfo.tsx";
import PreviewImage from "../PreviewImage/PreviewImage.tsx";
import {useUser} from "../../context/UserContext";

function HeaderProfile() {
  const {publicUser, dogs} = useUser(); // Access publicUser and dogs from context
  const [imageError, setImageError] = useState(false);

  if (!publicUser) {
    return null;
  }

  const firstName = publicUser.get("firstName") || "Unknown";
  const lastName = publicUser.get("lastName") || "User";

  const profilePicture = imageError
    ? profileDefault
    : (publicUser.get("profilePicture") as string) || profileDefault;

  return (
    <div className={styles.headerProfile}>
      <div className={styles.profileDetails}>
        <h2 className="color-white">{`${firstName} ${lastName}`}</h2>
        <div className={styles.dogList}>
          {dogs.map((dog) => (
            <DogInfo
              key={dog.objectId}
              dog={dog}
              variant="Dog info"
              textColor="white"
              flexDirection="column"
              pictureSize="27px"
            />
          ))}
          {dogs.length === 0 ? (
            <div className="color-white">No furry friends were found</div>
          ) : null}
        </div>
      </div>
      <PreviewImage
        src={profilePicture}
        alt="Profile picture"
        pictureSize="70px" // Use the specified size
        onError={() => setImageError(true)}
      />
    </div>
  );
}

export default HeaderProfile;

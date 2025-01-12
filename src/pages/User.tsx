import {useState} from "react";
import DogInfo from "../components/DogInfo/DogInfo.tsx";
import profileDefault from "../assets/profileDefault.png";
import "./Styling/StylingProfile.css";
import PreviewImage from "../components/PreviewImage/PreviewImage.tsx";
import EventsAttended from "../components/EventsAttended/EventsAttended.tsx";
import {useUserAndDogs} from "../hooks/usePublicUserAndDogs.ts";
import {useParams} from "react-router-dom";

function User() {
  const {id} = useParams();
  const {publicUser, dogs, loading} = useUserAndDogs(String(id));
  const [imageError, setImageError] = useState(false);

  if (!publicUser) {
    return <div>Loading...</div>;
  }

  const firstName = publicUser.firstName || "Unknown";
  const lastName = publicUser.lastName || "User";
  const profilePicture = imageError
    ? profileDefault
    : (publicUser.profilePicture as string) || profileDefault;


  return (
    <>
      <header>
        <section className="profile-section">
          <div className="profile-container">
            <PreviewImage
              src={profilePicture}
              alt="Profile picture"
              onError={() => setImageError(true)}
              border="3px #f9c069 solid"
            />
            <div className="profile-details">
              <h1 className="color-white">{`${firstName} ${lastName}`}</h1>
            </div>
          </div>
        </section>
      </header>

      <main>
        <div className="profile-button-container">
          <div className="h2-title-div">
            <h2 className="yourDogsTitle">Your dogs</h2>
          </div>
        </div>
        <section className="flex-column align-center">
          <div className="dog-container">
            <div className="dog-list">
              {loading ? (
                <div>Loading...</div>
              ) : (
                dogs.map((dog: any) => (
                  <DogInfo
                    key={dog.objectId}
                    dog={dog}
                    variant="Detailed dog info"
                    textColor="black"
                    flexDirection="column"
                    pictureSize="100px"
                    border="3px #f9c069 solid"
                  />
                ))
              )}
            </div>
          </div>
        </section>

        <section className="seperator-line"></section>

        <section className="flex-column align-center">
          <div className="h2-title-div">
            <h2 className="">Events {publicUser.firstName} attend</h2>
          </div>
          <EventsAttended/>
        </section>
      </main>
    </>
  );
}

export default User;
import React, { useState } from "react";
import { ProfileForm } from "../components/CreateUser/ProfileForm";
import { DogProfileForm } from "../components/CreateUser/DogProfileForm";
import { AddNewDogButton } from "../components/AddNewDogButton/AddNewDogButton";

function Profile() {
  const [dogProfiles, setDogProfiles] = useState<number[]>([]);

  const handleAddNewDogClick = () => {
    setDogProfiles([...dogProfiles, dogProfiles.length]);
  };

  return (
    <>
      <header>
        <section>
          <div className="flex-row space-between">
            <h1 className="color-white">Profile</h1>
          </div>
        </section>
      </header>

      <ProfileForm />
      <section className="seperator-line"></section>

      <div className="h2-title-div">
        <h2 className="yourDogsTitle">Your dogs</h2>
      </div>

      <DogProfileForm />

      {dogProfiles.map((profile, index) => (
        <DogProfileForm key={index} />
      ))}

      <section className="seperator-line"></section>

      <section className="flex-column align-center">
        <AddNewDogButton onAddNewDogClick={handleAddNewDogClick} />
      </section>
    </>
  );
}

export default Profile;

import React, { useState } from "react";

export const ProfileForm = () => {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  const handleProfilePictureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form className="profile-form form" action="/action_page.php">
      <div className="form-content">
        <h3>Profile info</h3>
        <div>
          <label htmlFor="profile-picture">Profile Picture</label>
          <input
            type="file"
            id="profile-picture"
            name="profile-picture"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
          {profilePicture && (
            <img
              src={profilePicture}
              alt="Profile"
              className="profile-picture-preview"
            />
          )}
        </div>
        <div>
          <label htmlFor="email">First name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Last name</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="row">
          <div className="form-element">
            <label htmlFor="address">Email</label>
            <input type="text" id="address" name="address" />
          </div>
          <div>
            <label htmlFor="city">Password</label>
            <input type="text" id="city" name="city" />
            <button disabled>Change password</button>
          </div>
        </div>
      </div>
    </form>
  );
};

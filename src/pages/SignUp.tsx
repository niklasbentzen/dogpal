import React, { useState } from "react";
import ProfileForm from "../components/CreateUser/ProfileForm.tsx";
import { useNavigate } from "react-router-dom";
import { saveUserAndDogs } from "../hooks/useCurrentUserAndDogs";
import { toast } from "react-toastify";
import { Dog } from "../Interface.ts";

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUpSubmit = async (data: {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    profilePicture: string | null;
    dogs: Dog[];
  }) => {
    try {
      await saveUserAndDogs(data, data.dogs);
      toast.success("User and Dogs saved successfully!");
      navigate("/profile"); // Navigate to profile page after sign-up
    } catch (error) {
      toast.error(
        error instanceof Error
          ? `Error: ${error.message}`
          : "An unknown error occurred."
      );
    }
  };

  return (
    <ProfileForm
      initialData={{
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        profilePicture: null,
        dogs: [],
      }}
      onSubmit={handleSignUpSubmit}
    />
  );
};

export default SignUp;
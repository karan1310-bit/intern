import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import profiles from '../Data';
import MapView from "../components/MapView";

const ProfileDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const profile = profiles.find((p) => p.id === parseInt(id));

  if (!profile) {
    return <p className="text-center text-red-500">Profile not found</p>;
  }

  return (
    <div className="p-6">
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        onClick={() => navigate("/")}
      >
        Back to Profiles
      </button>
      <div className="mt-6 max-w-md mx-auto bg-white shadow-md rounded-lg p-4">
        <img
          src={profile.photo}
          alt={profile.name}
          className="rounded-full w-32 h-32 mx-auto"
        />
        <h1 className="text-2xl font-bold text-center mt-4">{profile.name}</h1>
        <p className="text-center text-gray-600">{profile.description}</p>
        <div className="mt-4">
          <p><strong>Contact:</strong> {profile.contact}</p>
          <p><strong>Interests:</strong> {profile.interest.join(", ")}</p>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold text-center">Location</h2>
        <MapView location={profile.location} />
      </div>
    </div>
  );
};

export default ProfileDetails;
import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import profiles from "../Data";
import { Link } from "react-router-dom";

const ProfilesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Profile Explorer</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded w-full sm:w-1/2 mx-auto block mb-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProfiles.map((profile) => (
          <Link to={`/profile/${profile.id}`}>
            <ProfileCard profile={profile} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfilesPage;
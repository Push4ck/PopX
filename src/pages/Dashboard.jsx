import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import defaultPfp from "/ProfilePhoto.png";

function Dashboard() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [profilePicUrl, setProfilePicUrl] = useState(defaultPfp);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setCurrentUser(user);
      setProfilePicUrl(user.profilePic || defaultPfp);
    } else {
      toast.error("Please log in to access your profile.");
      navigate("/login");
    }
  }, [navigate]);

  const handlePfpChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast.error("Please select an image file (e.g., JPEG, PNG, GIF).");
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        toast.error("Image size exceeds 2MB. Please choose a smaller image.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const newPfpUrl = reader.result;

        setProfilePicUrl(newPfpUrl);

        const updatedUser = { ...currentUser, profilePic: newPfpUrl };
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));

        const allUsers = JSON.parse(localStorage.getItem("users")) || [];
        const userIndex = allUsers.findIndex((u) => u.id === updatedUser.id);
        if (userIndex !== -1) {
          allUsers[userIndex] = updatedUser;
          localStorage.setItem("users", JSON.stringify(allUsers));
        }
        toast.success("Profile picture updated successfully!");
        setCurrentUser(updatedUser);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!currentUser) {
    return <div className="text-gray-700">Loading user data...</div>;
  }

  return (
    <>
      <div className="min-h-screen flex flex-col justify-start px-4 sm:px-6 lg:px-8 pb-8">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Account Settings
          </h1>

          <div className="flex items-center space-x-6 mb-8">
            <div className="relative group">
              <img
                src={profilePicUrl}
                alt="User Profile"
                className="w-24 h-24 rounded-full object-cover border-2 border-purple-500"
              />
              <input
                type="file"
                id="pfpInput"
                accept="image/*"
                className="hidden"
                onChange={handlePfpChange}
              />
              <label
                htmlFor="pfpInput"
                className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 bg-purple-600 rounded-full p-2 cursor-pointer shadow-md border-2 border-white hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center w-8 h-8"
                title="Change profile picture"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.848-1.554A2 2 0 0113.23 3h3.53a2 2 0 011.664.89l.848 1.554A2 2 0 0021.07 7H22a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </label>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {currentUser.fullName}
              </p>
              <p className="text-lg text-gray-600">
                {currentUser.emailAddress}
              </p>
            </div>
          </div>

          <p className="sm:text-md lg:text-lg text-gray-700 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed diam
            nonumy Eirmod tempor invidunt Ut labore Et dolore Magna aliquyam
            erat Sed diam
          </p>

          <div className="border-b border-dashed border-gray-400"></div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

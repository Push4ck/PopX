import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const storedCurrentUser = localStorage.getItem("currentUser");
    if (storedCurrentUser) {
      try {
        const user = JSON.parse(storedCurrentUser);
        setUserData(user);
      } catch (e) {
        console.error("Failed to parse currentUser from localStorage:", e);
        setError("Failed to load user data from local storage.");
      }
    } else {
      setError("No user found in local storage. Please log in.");
    }
    setLoading(false);
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center p-4 text-gray-700">
        Loading user detail...
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center p-4 text-red-600">
        Error: {error}
      </div>
    );
  if (!userData)
    return (
      <div className="min-h-screen flex items-center justify-center p-4 text-gray-700">
        User data not found.
      </div>
    );

  return (
    <>
      <div className="max-w-md mx-auto mt-10 border">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Your Profile</h2>
        </div>

        <div className="p-4 space-y-4">
          <div className="border p-3 rounded shadow-sm">
            <h3 className="font-bold text-base">Name: {userData.fullName}</h3>
            <p className="text-sm text-gray-700">
              Email: {userData.emailAddress}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Phone: {userData.phoneNumber}
            </p>
            {userData.companyName && (
              <p className="text-xs text-gray-500 mt-1">
                Company: {userData.companyName}
              </p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              Agency: {userData.isAgency ? "Yes" : "No"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

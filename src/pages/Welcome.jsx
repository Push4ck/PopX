import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="min-h-screen flex flex-col justify-end px-4 sm:px-6 lg:px-8 pb-8">
      <div className="w-full max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Welcome to PopX
        </h1>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="space-y-4">
          <Link
            to="/register"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Create Account
          </Link>
          <Link
            to="/login"
            className="w-full flex justify-center py-2 px-4 border border-purple-600 rounded-md shadow-sm text-sm font-medium text-purple-600 bg-purple-100 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;

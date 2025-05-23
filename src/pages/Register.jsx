import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
    companyName: "",
    isAgency: false,
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be exactly 10 digits.";
    }

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
      newErrors.emailAddress = "Please enter a valid email address.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    let newValue = value;

    if (name === "phoneNumber") {
      newValue = value.replace(/\D/g, "");
      if (newValue.length > 10) {
        newValue = newValue.slice(0, 10);
      }
    }

    setFormData({
      ...formData,
      [name]: type === "radio" ? newValue === "yes" : newValue,
    });
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validate()) {
      toast.error("Please correct the errors in the form.");
      setLoading(false);
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((user) => user.emailAddress === formData.emailAddress)) {
      toast.error("An account with this email address already exists.");
      setLoading(false);
      return;
    }

    const newUser = {
      ...formData,
      id: Date.now(),
      role: formData.emailAddress === "admin@popx.com" ? "admin" : "user",
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    toast.success("Account created successfully!");
    setLoading(false);
    navigate("/login");
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-end px-4 sm:px-6 lg:px-8 pb-8">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-gray-900">
            Create your PopX account
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm`}
                placeholder="John Doe"
                required
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm`}
                placeholder="e.g., 9876543210"
                maxLength="10"
                required
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="emailAddress"
                className="block text-sm font-medium text-gray-700"
              >
                Email address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.emailAddress ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm`}
                placeholder="name@example.com"
                required
              />
              {errors.emailAddress && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.emailAddress}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm`}
                placeholder="********"
                required
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700"
              >
                Company name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.companyName ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm`}
                placeholder="Acme Corp"
              />
              {errors.companyName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.companyName}
                </p>
              )}
            </div>

            <div className="flex items-center">
              <p className="text-sm font-medium text-gray-700 mr-4">
                Are you an Agency?
              </p>
              <div className="flex items-center">
                <input
                  id="isAgencyYes"
                  name="isAgency"
                  type="radio"
                  value="yes"
                  checked={formData.isAgency === true}
                  onChange={handleChange}
                  className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300"
                />
                <label
                  htmlFor="isAgencyYes"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center ml-4">
                <input
                  id="isAgencyNo"
                  name="isAgency"
                  type="radio"
                  value="no"
                  checked={formData.isAgency === false}
                  onChange={handleChange}
                  className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300"
                />
                <label
                  htmlFor="isAgencyNo"
                  className="ml-2 block text-sm text-gray-900"
                >
                  No
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? "Registering..." : "Create Account"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;

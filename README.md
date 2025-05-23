````markdown
# PopX User Management System

## Project Overview

This project is a modern, responsive web application built with React and Tailwind CSS, demonstrating a complete user management system. It features user registration, secure login (simulated with client-side storage), a personalized user dashboard, and a dedicated administrator dashboard for managing all registered users. The application prioritizes a clean, intuitive user interface and a smooth user experience.

This project was developed as part of my internship to showcase proficiency in front-end development, state management, routing, and responsive design.

## Features

- **User Registration:** Allows new users to create an account with details like full name, phone number, email, password, and company information.
- **User Login:** Authenticates existing users against stored credentials.
- **Personalized User Dashboard:** Displays the logged-in user's profile information and allows them to update their profile picture.
- **Admin Dashboard:** Provides an overview of all registered users, accessible only to users with administrative privileges.
- **Client-Side Data Storage:** User data is persisted locally using `localStorage` for demonstration purposes.
- **Responsive UI:** Designed with Tailwind CSS to ensure optimal viewing and interaction across various devices (mobile, tablet, desktop).
- **Toast Notifications:** Uses `react-toastify` for non-intrusive success, error, and informational messages.
- **Form Validation:** Implements client-side validation for registration fields to provide immediate feedback to the user.

## Technologies Used

- **React.js:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
- **React Router DOM:** For declarative routing within the application.
- **React Toastify:** A library for adding toast notifications.
- **`localStorage`:** Browser API for client-side data persistence (for demonstration purposes).

## Setup and Installation

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js (LTS version recommended)
- npm (Node Package Manager) or Yarn

### Steps

1.  **Clone the repository:**

    ```bash
    git clone <repository-url> # Replace with your actual repository URL
    cd popx-user-management-system
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # OR
    yarn install
    ```

3.  **Start the development server:**

    ```bash
    npm start
    # OR
    yarn start
    ```

    The application will open in your default web browser at `http://localhost:3000`.

## Usage

### 1. Welcome Page (`/`)

- Upon launching the application, you'll land on the Welcome page.
- Click "Create Account" to navigate to the registration form.
- Click "Already Registered? Login" to go to the login page.

### 2. Register Account (`/register`)

- Fill in all required fields (Full Name, Phone Number, Email Address, Password).
- **Admin Account:** To create an admin user for testing, use `admin@popx.com` as the email address during registration. All other email addresses will create regular user accounts.
- Phone number input is restricted to 10 digits and numbers only.
- Password must be at least 8 characters long.
- Validation errors will appear below the respective input fields.
- Upon successful registration, you will be redirected to the Login page.

### 3. Login (`/login`)

- Enter your registered email address and password.
- Upon successful login:
  - Regular users will be redirected to the **User Dashboard (`/dashboard`)**.
  - The admin user (`admin@popx.com`) will be redirected to the **Admin Dashboard (`/admin-dashboard`)**.

### 4. User Dashboard (`/dashboard`)

- Displays your profile information (Name, Email, Phone, Company, Agency Status).
- **Change Profile Picture:** Click the camera icon overlaid on your profile picture to upload a new image. The new picture will be saved locally and displayed.
- Click "Logout" to end your session and return to the Login page.

### 5. Admin Dashboard (`/admin-dashboard`)

- This page is only accessible to users logged in with the `admin@popx.com` account.
- It lists all registered users with their details.
- Click "Logout" to end your session.

## Project Structure
````

popx-user-management-system/
├── public/
│ └── ProfilePhoto.png # Default profile photo
├── src/
│ ├── components/ # Reusable UI components (e.g., ProtectedRoute)
│ ├── pages/ # Main application pages (Welcome, Register, Login, Dashboard, AdminDashboard)
│ │ ├── Welcome.jsx
│ │ ├── Register.jsx
│ │ ├── Login.jsx
│ │ ├── Dashboard.jsx
│ │ └── AdminDashboard.jsx
│ ├── App.jsx # Main application component and routing setup
│ ├── index.css # Tailwind CSS imports and global styles
│ ├── main.jsx # React app entry point (renders App)
│ └── utils/ # Utility functions (if any, currently handled inline)
├── package.json # Project dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
└── README.md # This file

```

## Future Enhancements

To evolve this project into a production-ready application, consider the following improvements:

* **Backend Integration:** Implement a robust backend (e.g., Node.js with Express, Python with Django/Flask) and a database (e.g., PostgreSQL, MongoDB, Firebase Firestore) for:
    * Securely storing user data (passwords should always be hashed).
    * Handling authentication with JWT (JSON Web Tokens) or similar secure methods.
    * Managing user roles and permissions more effectively.
    * Storing profile pictures on cloud storage (e.g., AWS S3, Google Cloud Storage) rather than as Base64 strings in `localStorage`.
* **Advanced Authentication:**
    * "Forgot Password" functionality.
    * Email verification for new registrations.
    * Social logins (Google, Facebook).
* **User Profile Editing:** Allow users to update their personal details (name, phone, company) from the dashboard.
* **Admin Features:**
    * Ability for admins to edit or delete user accounts.
    * Search and filter functionality for the user list.
    * More detailed user analytics.
* **Improved UI/UX:**
    * Add loading spinners for asynchronous operations.
    * Implement more sophisticated form validation (e.g., using libraries like Formik or React Hook Form).
    * Enhance accessibility features.
    * Add animations and transitions for a more dynamic feel.
* **Testing:** Implement unit, integration, and end-to-end tests.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add new feature'`).
5.  Push to the branch (`git push origin feature/YourFeature`).
6.  Open a Pull Request.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contact

For any questions or feedback, please contact:

[Your Name]
[Your Email Address]
[Your LinkedIn Profile URL (Optional)]
```

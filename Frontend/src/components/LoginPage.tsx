import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Styling/LoginPage.css"; // Assuming you have similar styling for login

// Define the shape of the form state for login
interface LoginValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();

  // Initialize login form state with TypeScript types
  const [loginData, setLoginData] = useState<LoginValues>({
    email: "",
    password: "",
  });

  // Initialize error state for login form with TypeScript types
  const [errors, setErrors] = useState<LoginValues>({
    email: "",
    password: "",
  });

  // Function to validate the login inputs
  const validateLogin = () => {
    let formErrors: LoginValues = { email: "", password: "" };
    if (!loginData.email.includes("@")) {
      formErrors.email = "Invalid email address";
    }
    if (loginData.password.length === 0) {
      formErrors.password = "Password is required";
    }
    return formErrors;
  };

  // Update the state when the user types in the inputs
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
  };

  // Handle login form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors = validateLogin();
    if (!Object.values(newErrors).some((error) => error)) {
      // Here you would typically handle the login logic, like calling an API
      console.log("Login Data:", loginData);
      navigate("/Dashboard"); // Navigate to dashboard or other appropriate route
    } else {
      setErrors(newErrors);
    }
  };

  useEffect(() => {
    // When the component mounts, add the specific background class to the body
    document.body.classList.add("login-background");

    // When the component unmounts, remove the background class from the body
    return () => {
      document.body.classList.remove("login-background");
    };
  }, []);

  return (
    <section className="login-section">
      <div className="actual"></div>
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={loginData.email}
            onChange={handleChange}
            className={errors.email ? "error-input" : ""}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={loginData.password}
            onChange={handleChange}
            className={errors.password ? "error-input" : ""}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <div className="form-buttons">
          <div className="form-buttons">
            <button type="submit">Login</button>
            <button type="button" className="forgot-password-button">
              Forgot Password?
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;

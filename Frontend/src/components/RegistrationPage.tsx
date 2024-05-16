import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styling/RegistrationPage.css';

// Define the shape of the form state
interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationForm = () => {
  const navigate = useNavigate();

  // Initialize form state with TypeScript types
  const [formData, setFormData] = useState<FormValues>({
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Initialize error state with TypeScript types
  const [errors, setErrors] = useState<FormValues>({
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Function to validate the form inputs
  const validateForm = () => {
    let formErrors: FormValues = { email: '', password: '', confirmPassword: '' };
    if (!formData.email.includes('@')) {
      formErrors.email = 'Invalid email address';
    }
    if (formData.password.length < 8) {
      formErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'Passwords must match';
    }
    return formErrors;
  };

  // Update the state when the user types in the inputs
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors = validateForm();
    if (!Object.values(newErrors).some(error => error)) {
      alert(JSON.stringify(formData, null, 2));
      navigate('/LoginPage'); // Navigate to login or other page after successful registration
    } else {
      setErrors(newErrors);
    }
  };

  useEffect(() => {
    // When the component mounts, add the specific background class to the body
    document.body.classList.add('registration-background');

    // When the component unmounts, remove the background class from the body
    return () => {
      document.body.classList.remove('registration-background');
    };
  }, []);

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error-input' : ''}
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div>
        <label htmlFor="password">Adgangskode</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          className={errors.password ? 'error-input' : ''}
        />
        {errors.password && <div className="error">{errors.password}</div>}
      </div>
      <div>
        <label htmlFor="confirmPassword">Bekræft Adgangskode</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={errors.confirmPassword ? 'error-input' : ''}
        />
        {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
      </div>
      <div className="form-buttons">
        <button type="button" onClick={() => navigate('/LoginPage')}>
          Allerede bruger? Log ind
        </button>
        <button type="submit">Registrer</button>
      </div>
    </form>
  );
};

export default RegistrationForm;

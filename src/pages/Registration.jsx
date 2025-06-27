import React, { useState } from "react";
import "../styles/Registration.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    affiliation: "",
    department: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    setSubmitted(true);
  };

  return (
    <div className="registration-page">
      <div className="registration-card">
        <h2>Conference Registration</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <label>
              Full Name *
              <input type="text" name="name" required onChange={handleChange} />
            </label>
            <label>
              Email *
              <input type="email" name="email" required onChange={handleChange} />
            </label>
            <label>
              Phone *
              <input
                type="tel"
                name="phone"
                pattern="[0-9]{10}"
                required
                onChange={handleChange}
              />
            </label>
            <label>
              Affiliation *
              <input type="text" name="affiliation" required onChange={handleChange} />
            </label>
            <label>
              Department *
              <select name="department" required onChange={handleChange}>
                <option value="">Select</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Computer Science and Business Systems">
                  Computer Science & Business Systems
                </option>
                <option value="Other">Other</option>
              </select>
            </label>
            <button type="submit">Submit Registration</button>
          </form>
        ) : (
          <div className="success-message">
            Thank you for registering! Confermation will be sent shortly.
          </div>
        )}
      </div>
    </div>
  );
};

export default Registration;

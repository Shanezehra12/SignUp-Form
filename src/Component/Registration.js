import React, { useState } from "react";
import "../Component/Regitration.css"; // Create a CSS file for styling

function Registration() {
  // Define state variables for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [education, setEducation] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [experience, setExperience] = useState("");

  const [selectedOption, setSelectedOption] = useState(0);
  const [isValid, setIsValid] = useState(false);

    // Function to handle changes in the password
    const handlePasswordChange = (e) => {
      const newPassword = e.target.value;
      setPassword(newPassword);

  // Define regex patterns for each condition
    const uppercasePattern = /(?=.*[A-Z])/;
    const lowercasePattern = /(?=.*[a-z])/;
    const numberPattern = /(?=.*\d)/;
    const specialCharPattern = /(?=.*[@#$%^&+=])/;

    // Check if the password meets all conditions
    const isUppercaseValid = uppercasePattern.test(newPassword);
    const isLowercaseValid = lowercasePattern.test(newPassword);
    const isNumberValid = numberPattern.test(newPassword);
    const isSpecialCharValid = specialCharPattern.test(newPassword);

    setIsValid(
      isUppercaseValid && isLowercaseValid && isNumberValid && isSpecialCharValid
    );
  };

  // Function to handle changes in the dropdown selection
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit}>
        <div className="top">
          SIGN UP <span></span>
          <a href="#" style={{ marginLeft: 250 }}>
            LOGIN
          </a>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* ///////////////////////////////////////////////////////////////////////////////////// */}

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {isValid ? (
        <span></span>
      ) : (
        <span style={{ color: 'black', fontSize: 14 }}>
          Password must include uppercase and lowercase letters, a number, and a special character
        </span>
      )}
        </div>

        {/* ///////////////////////////////////////////////////////////////////////////////////// */}

        <div className="form-group">
          <label>Contact</label>
          <input
            type="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        {/* ///////////////////////////////////////////////////////////////////////////////////// */}

        <div className="form-group">
          <label>Location</label>
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value=""></option>
            <option value="option1">Karachi</option>
            <option value="option2">Lahore</option>
            <option value="option3">Islamabad</option>
            <input
              type="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </select>
        </div>

        {/* ///////////////////////////////////////////////////////////////////////////////////// */}

        <div className="form-group">
          <label>Education</label>
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value=""></option>
            <option value="option1">Matric</option>
            <option value="option2">Intermediate</option>
            <option value="option3">Graduation</option>
            <input
              type="education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            />
          </select>
        </div>

        {/* ///////////////////////////////////////////////////////////////////////////////////// */}

        <div className="form-group">
          <label>Job Title</label>
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value=""></option>
            <option value="option1">Frontend</option>
            <option value="option2">Backend</option>
            <option value="option3">Mern Stack</option>
            <input
              type="jobTitle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </select>
        </div>

        {/* ///////////////////////////////////////////////////////////////////////////////////// */}

        <div className="form-group">
          <label>Organization</label>
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value=""></option>
            <option value="option1">ABC Company</option>
            <option value="option2">GHI Company</option>
            <option value="option3">XYZ Company</option>
            <input
              type="organization"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
            />
          </select>
        </div>

        {/* ///////////////////////////////////////////////////////////////////////////////////// */}

        <div className="form-group">
          <label>Years of Experience</label>
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value=""></option>
            <option value="option1">2 Years</option>
            <option value="option2">5 Years</option>
            <option value="option3">10 Years</option>
            <input
              type="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </select>
        </div>
        <button type="submit">SIGN UP</button>

        <div className="or-style">
          ------------------------------------OR-----------------------------------
        </div>

        <div className="image-style">
          <img style={{ marginLeft: 70 }}
          src="https://www.citypng.com/public/uploads/preview/-11597077689odjmrfmvei.png" alt="#"/>
          <img src="https://icons-for-free.com/download-icon-fb+icon+icon-1320194641178775596_512.png" alt="#" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/1200px-LinkedIn_icon_circle.svg.png" alt="#"/>
        </div>

        <div className="text">
          Already a user? <span></span>
          <a href="#">LOGIN</a>
        </div>
      </form>
    </div>
  );
}

export default Registration;

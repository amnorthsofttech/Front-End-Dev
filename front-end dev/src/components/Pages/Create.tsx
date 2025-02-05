import { newUser, initialUserInputs } from "../types/forms/signupForm";
import createStyles from "../../styles/pages/Create.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Create() {
  // ==========================
  // State
  // ==========================
  const [userInput, setUserInput] = useState<newUser>(initialUserInputs);
  const [legalNameMsg, setLegalNameMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [phoneNumberMsg, setPhoneNumberMsg] = useState("");
  const [confirmedPasswordMsg, setConfirmedPasswordMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

  const navigate = useNavigate();
  // ==========================
  // Function to navigate to the login page
  // ==========================
  const loginLink = (): void => {
    navigate("/Login");
  };

  // ==========================
  // Function to set password visibility
  // ==========================
  const passwordVisibilityToggle = (): void => {
    setShowPassword((show) => !show);
  };

  const confirmedPasswordVisibilityToggle = (): void => {
    setShowConfirmedPassword((show) => !show);
  };
  // ==========================
  // Function to validate user legal name
  // ==========================
  const validateLegalName = (legalName: string): void => {
    const legalNamePattern = /^[a-zA-Z0-9 ]{1,40}$/;

    if (!legalNamePattern.test(legalName)) {
      setLegalNameMsg(
        "Name must contain alphanumeric characters. The length must be between 1-40 characters."
      );
    } else {
      setLegalNameMsg("");
    }
  };

  // ==========================
  // Function to validate user email
  // ==========================
  const validateEmail = (email: string): void => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailMsg("Email is invalid");
    } else {
      setEmailMsg("");
    }
  };

  // ==========================
  // Function to validate user password
  // ==========================
  const validatePassword = (password: string): void => {
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_])[A-Za-z\d!@#$%^&*_]{8,16}$/;

    if (!passwordPattern.test(password)) {
      setPasswordMsg(
        "Your password must be 8-16 characters long, contain at least one uppercase letter, one number, and one special character from the set: ! @ # $ % ^ & * _"
      );
    } else {
      setPasswordMsg("");
    }
  };

  // ==========================
  // This is to keep checking if both
  // password fields matches
  // ==========================
  useEffect(() => {
    if (userInput.confirmPassword !== userInput.password) {
      setConfirmedPasswordMsg(
        "Passwords do not match. Please confirm your password again."
      );
    } else {
      setConfirmedPasswordMsg("");
    }
  }, [userInput.password, userInput.confirmPassword]);

  // ==========================
  // Function to validate user phone number
  // ==========================
  const validatePhoneNumber = (phoneNumber: string): void => {
    const phoneNumberPattern = /^\d{10}$/;

    if (!phoneNumberPattern.test(phoneNumber)) {
      setPhoneNumberMsg(
        "Phone number must be 10 characters. Example: 6137371111"
      );
    } else {
      setPhoneNumberMsg("");
    }
  };

  // ==========================
  // Function helper to validate user inputs
  // ==========================
  const validateField = (name: string, value: string) => {
    switch (name) {
      case "legalName":
        validateLegalName(value);
        break;
      case "email":
        validateEmail(value);
        break;
      case "phoneNumber":
        validatePhoneNumber(value);
        break;
      case "password":
        validatePassword(value);
        break;
      default:
        break;
    }
  };

  // ==========================
  // Function to handle user inputs
  // ==========================
  const handleUserInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setUserInput((prev) => {
      return { ...prev, [name]: value };
    });
    // Validate the field
    validateField(name, value);
  };
  // ==========================
  // Function to handle user input
  // ==========================
  const handleSubmitForm = (e: React.FormEvent): void => {
    e.preventDefault();
  };
  return (
    <>
      <div className={`container ${createStyles.container}`}>
        <div className={`row ${createStyles.row}`}>
          <div className="col">
            <div className="box">
              <form onSubmit={handleSubmitForm}>
                <br />
                <h3>Create Account</h3>
                <br />
                {/* ******* Legal name section ******* */}
                <label>Full legal name</label>
                <br />
                <input
                  className={` form-control ${createStyles.userInput}`}
                  type="text"
                  placeholder="Your full legal name"
                  name="legalName"
                  required
                  autoComplete="off"
                  value={userInput.legalName}
                  onChange={handleUserInputChange}
                />
                {legalNameMsg.length > 0 && (
                  <p style={{ color: "red", fontSize: "18px" }}>
                    {legalNameMsg}
                  </p>
                )}
                <br />
                {/* ******* Email section ******* */}
                <label>Email</label>
                <br />
                <input
                  className={` form-control ${createStyles.userInput}`}
                  type="email"
                  name="email"
                  placeholder="abc@example.com"
                  required
                  autoComplete="off"
                  value={userInput.email}
                  onChange={handleUserInputChange}
                />
                {emailMsg.length > 0 && (
                  <p style={{ color: "red", fontSize: "18px" }}>{emailMsg}</p>
                )}
                <br />
                {/* ******* Phone number section ******* */}
                <label>Phone Number</label>
                <br />
                <input
                  className={` form-control ${createStyles.userInput}`}
                  type="tel"
                  name="phoneNumber"
                  placeholder="Your 10 digit phone number"
                  required
                  autoComplete="off"
                  value={userInput.phoneNumber}
                  onChange={handleUserInputChange}
                />

                <br />
                {phoneNumberMsg.length > 0 && (
                  <p style={{ color: "red", fontSize: "18px" }}>
                    {phoneNumberMsg}
                  </p>
                )}
                {/* ******* Password section ******* */}
                <label>Password</label>
                <br />

                <input
                  className={` form-control ${createStyles.userInput}`}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password123"
                  required
                  autoComplete="off"
                  value={userInput.password}
                  onChange={handleUserInputChange}
                />
                <div className="form-check form-switch">
                  Show password
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    onChange={passwordVisibilityToggle}
                  />
                </div>

                {passwordMsg.length > 0 && (
                  <p style={{ color: "red", fontSize: "18px" }}>
                    {passwordMsg}
                  </p>
                )}
                <br />
                {/* ******* Password confirmation section ******* */}
                <label>Confirm password</label>
                <br />

                <input
                  className={` form-control ${createStyles.userInput}`}
                  type={showConfirmedPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Password123"
                  required
                  autoComplete="off"
                  value={userInput.confirmPassword}
                  onChange={handleUserInputChange}
                />

                <div className="form-check form-switch">
                  Show password
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    onChange={confirmedPasswordVisibilityToggle}
                  />
                </div>
                {confirmedPasswordMsg.length > 0 && (
                  <p style={{ color: "red", fontSize: "18px" }}>
                    {confirmedPasswordMsg}
                  </p>
                )}
                <br />

                <button
                  type="submit"
                  className={`btn btn-primary btn-lg ${createStyles.signinBTN}`}
                >
                  Sign up
                </button>
              </form>
              <br />

              <br />
              <p onClick={loginLink} className={`${createStyles.loginLink}`}>
                Login instead
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;

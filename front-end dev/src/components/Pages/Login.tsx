import loginstyles from "../../styles/pages/Login.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { existingUser, initialUserInputs } from "../types/forms/loginForm";

function Login() {
  // ==========================
  // Managing state
  // ======================π====
  const [userInput, setUserInput] = useState<existingUser>(initialUserInputs);
  const [emailMsg, setEmailMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // ==========================
  // Function to show/not show password
  // ==========================
  const passwordVisibilityToggle = (): void => {
    setShowPassword((show) => !show);
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
  // Function to handle user inputs
  // ==========================
  const handleUserInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setUserInput((prev) => {
      return { ...prev, [name]: value };
    });
    if (name === "email") validateEmail(value);
  };

  // ==========================
  // This function will handle the form submission
  // ==========================
  const handleSubmitForm = (e: React.FormEvent): void => {
    e.preventDefault();
  };
  // ==========================
  // Navigate to the reset password page
  // ==========================
  const navigate = useNavigate();

  const ResetPasswordLink = (): void => {
    navigate("/Resetpassword");
  };

  // ==========================
  // Navigate to the create account page
  // ==========================
  const createAccountLink = (): void => {
    navigate("/Create");
  };

  return (
    <>
      <div className={`container ${loginstyles.container}`}>
        <div className={`row ${loginstyles.row}`}>
          <div className={`col ${loginstyles.col}`}>
            <div className="box">
              <form onSubmit={handleSubmitForm}>
                <br />
                <h3>Sign in to NorthSettle</h3>
                <br />
                <label>Email</label>
                <br />
                <input
                  className={` form-control ${loginstyles.userInput}`}
                  type="email"
                  name="email"
                  placeholder="abc@example.com"
                  required
                  value={userInput.email}
                  autoComplete="off"
                  onChange={handleUserInputChange}
                />
                {emailMsg.length > 0 && (
                  <p style={{ color: "red", fontSize: "18px" }}>{emailMsg}</p>
                )}{" "}
                <br />
                <label>Password</label>
                <input
                  className={` form-control ${loginstyles.userInput}`}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Your password"
                  required
                  value={userInput.password}
                  autoComplete="off"
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
                <br />
                <button type="submit" className="btn btn-primary btn-lg">
                  Sign in
                </button>
                <br />
                <br />
                <p
                  onClick={ResetPasswordLink}
                  className={`${loginstyles.forgotPassword}`}
                >
                  Forgot Password?
                </p>
                <p
                  onClick={createAccountLink}
                  className={`${loginstyles.createAccount}`}
                >
                  Create Account
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

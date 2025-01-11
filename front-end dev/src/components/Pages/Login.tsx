import loginstyles from "../../styles/Login.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// ==========================
// User type and it's inputs
// ==========================
type User = {
  email: string;
  password: string;
};

// ==========================
// Initial state for the user inputs
// ==========================
const initialUserInputs = { email: "", password: "" };

function Login() {
  // ==========================
  // Managing state
  // ==========================
  const [userInput, setUserInputs] = useState<User>(initialUserInputs);
  const [emailMessage, setEmailMessage] = useState("");

  // ==========================
  // Function to handle user inputs change, The e is of type Event.
  // ==========================
  const handleUserInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setUserInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };
  // ==========================
  // Validate the email just in case a user bypasses browser restrictions
  // ==========================
  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  // ==========================
  // This function will handle the form submission
  // ==========================
  const handleSubmitForm = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!validateEmail(userInput.email)) {
      setEmailMessage("Email is invalid"); // Show error if email is invalid
    } else {
      setEmailMessage(""); // Clear error if email is valid
    }
  };
  // ==========================
  // Navigate the reset password page
  // ==========================
  const navigate = useNavigate();
  const ResetPasswordLink = (): void => {
    navigate("/Resetpassword");
  };

  // ==========================
  // Navigate  the create account page
  // ==========================
  const createAccountLink = (): void => {
    navigate("/Create");
  };

  return (
    <>
      {/* outer-container  */}
      <div className={`container ${loginstyles.container}`}>
        {/* inner-container  */}
        <div className={`row ${loginstyles.row}`}>
          <div className={`col ${loginstyles.col}`}>
            <div className={`box ${loginstyles.box}`}>
              <form onSubmit={handleSubmitForm}>
                <br />
                <h3>Sign in to NorthSettle</h3>
                <br />
                <label className={` ${loginstyles.emaillabel}`} htmlFor="email">
                  Email
                </label>
                <br />

                <input
                  className={` form-control ${loginstyles.emailinput}`}
                  type="email"
                  name="email"
                  placeholder="abc@example.com"
                  required
                  value={userInput.email}
                  autoComplete="off"
                  onChange={handleUserInputChange}
                />
                <p style={{ color: "red" }}>{emailMessage}</p>
                <br />
                <br />
                <label
                  className={` ${loginstyles.passwordlabel}`}
                  htmlFor="password"
                >
                  Password
                </label>
                <br />

                <input
                  className={` form-control ${loginstyles.passwordinput}`}
                  type="password"
                  name="password"
                  placeholder="Your password"
                  required
                  value={userInput.password}
                  autoComplete="off"
                  onChange={handleUserInputChange}
                />
                <br />
                <br />

                <button
                  type="submit"
                  className={`btn btn-primary btn-lg ${loginstyles.siginbutton}`}
                >
                  Sign in
                </button>
                <br />
                <br />
                <p
                  onClick={ResetPasswordLink}
                  className={`${loginstyles.forgotpassword}`}
                >
                  Forgot Password?
                </p>
                <p
                  onClick={createAccountLink}
                  className={`${loginstyles.createaccount}`}
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

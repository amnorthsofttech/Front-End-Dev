import resetpasstyles from "../../styles/pages/Resetpassword.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// ==========================
// user type and it's inputs
// ==========================
type User = {
  email: string;
};

// ==========================
// Initial state for the user inputs
// ==========================
const initialUserInputs = { email: "" };

function Resetpassword() {
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
  const loginLink = () => {
    navigate("/Login");
  };

  // ==========================
  // Navigate to the create account page
  // ==========================
  const createAccountLink = (): void => {
    navigate("/Create");
  };

  return (
    <>
      {/* outer-container  */}
      <div className={`container ${resetpasstyles.container}`}>
        {/* inner-container  */}
        <div className={`row ${resetpasstyles.row}`}>
          <div className={`col ${resetpasstyles.col}`}>
            <div className={`box ${resetpasstyles.box}`}>
              <form onSubmit={handleSubmitForm}>
                <br />
                <h3>Forgot password</h3>
                <br />
                <label
                  className={` ${resetpasstyles.emaillabel}`}
                  htmlFor="email"
                >
                  Email
                </label>
                <br />

                <input
                  className={` form-control ${resetpasstyles.emailinput}`}
                  type="email"
                  name="email"
                  placeholder="abc@example.com"
                  required
                  value={userInput.email}
                  autoComplete="off"
                  onChange={handleUserInputChange}
                />
                <p style={{ color: "red" }}>{emailMessage}</p>
                <button
                  type="submit"
                  className={`btn btn-primary ${resetpasstyles.siginbutton}`}
                >
                  Reset password
                </button>
                <br />
                <br />
                <p
                  onClick={createAccountLink}
                  className={`${resetpasstyles.forgotpassword}`}
                >
                  Create account
                </p>
                <p
                  onClick={loginLink}
                  className={`${resetpasstyles.createaccount}`}
                >
                  Login instead
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resetpassword;

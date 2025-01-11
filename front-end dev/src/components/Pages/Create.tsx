import createstyles from "../../styles/Create.module.css";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();

  const Loginlink = () => {
    navigate("/Login");
  };
  return (
    <>
      {/* outer-container  */}
      <div className={`container ${createstyles.container}`}>
        {/* inner-container  */}
        <div className={`row ${createstyles.row}`}>
          <div className={`col ${createstyles.col}`}>
            <div className={`box ${createstyles.box}`}>
              <form>
                <br />
                <h3>Create Account</h3>
                <br />
                {/* ******* First name section ******* */}
                <label htmlFor="text">Name</label>
                <br />

                <input
                  className={` form-control ${createstyles.userinput}`}
                  type="text"
                  placeholder="Your full legal name"
                  name="legalName"
                  required
                  maxLength={40}
                  autoComplete="off"
                />
                <br />
                {/* ******* Email section ******* */}
                <label htmlFor="email">Email</label>
                <br />

                <input
                  className={` form-control ${createstyles.userinput}`}
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required

                  autoComplete="off"
                />
                <br />
                {/* ******* Phone number section ******* */}
                <label htmlFor="tel">Phone Number</label>
                <br />
                <input
                  className={` form-control ${createstyles.userinput}`}
                  type="tel"
                  name="phoneNumber"
                  placeholder="Your 10 digit phone number"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  required
                  autoComplete="off"
                />
                <br />
                {/* ******* Password section ******* */}
                <label htmlFor="password">Password</label>
                <br />

                <input
                  className={` form-control ${createstyles.userinput}`}
                  type="password"
                  name="password"
                  placeholder="Your password"
                  required
                  maxLength={16}
                  minLength={8}
                  autoComplete="off"
                />
                <p style={{color: "red"}}>
                  Must have uppercase characters, lowercase characters, numbers
                  and symbols. 8 to 16 characters inclusive!{" "}
                </p>
                {/* ******* Password confirmation section ******* */}
                <label htmlFor="password">Password</label>
                <br />

                <input
                  className={` form-control ${createstyles.userinput}`}
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Confirm your password"
                  required
                  autoComplete="off"
                />
                <br />

                <button
                  type="submit"
                  className={`btn btn-primary btn-lg ${createstyles.siginbutton}`}
                >
                  Sign up
                </button>
                <br />
                <br />
                <p onClick={Loginlink} className={`${createstyles.loginlink}`}>
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

export default Create;

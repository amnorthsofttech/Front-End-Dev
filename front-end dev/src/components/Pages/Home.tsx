import homestyles from "../../styles/pages/Home.module.css";
import { useNavigate } from "react-router-dom";
function Home() {

  const navigate  = useNavigate();

  const sendLink = (()=>{
    navigate("/Send")
  })
  return (
    <>
      {/* outer-container  */}
      <div className={`container ${homestyles.container}`}>
        {/* inner-container  */}
        <div className={`row ${homestyles.row}`}>
          <div className={`col ${homestyles.col}`}>
            <div className={`box ${homestyles.box}`}>
              <div>
                <strong>
                  {" "}
                  <p className={`${homestyles.minitext}`}>
                    Mid market Exchange Rates. No Markup or fee added to the
                    exchange rate
                  </p>
                </strong>
              </div>

              <div>
                <strong>
                  <p className={`${homestyles.minitext}`}>
                    Premium members pay 10$ a month and get unlimited
                    transactions for payments made with debit card. 2% Fee added for payments made with credit
                    card but capped at 50$
                  </p>
                </strong>
              </div>
              <div>
                <strong>
                  <p className={`${homestyles.minitext}`}>
                    Non subscribers get unlimited transactions for 5$ per
                    transaction. 2% Fee added for payments made with credit card
                    but capped at 50$
                  </p>
                </strong>
                
              </div>
              <div>
              
              <button
                  onClick={sendLink}
                  className={`btn btn-primary btn-lg ${homestyles.sendbutton}`}
                >
                  Send Money
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

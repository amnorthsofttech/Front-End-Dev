import sendStyles from "../../styles/pages/Send.module.css";
import { sendInput, initialSendInputs } from "../types/forms/sendForm";
import { useState } from "react";

function Send() {
  const [sendInput, setSendInput] = useState<sendInput>(initialSendInputs);

  return (
    <>
      <div className={`container ${sendStyles.container}`}>
        <div className={`row ${sendStyles.row}`}>
          <div className={`col ${sendStyles.col}`}>
            <div className="box">
              <form>
                <h2>Send money with fair market rate</h2>
                <br />

                <label htmlFor="amountToSend">You send</label>
                <br />
                <input
                  className={` form-control ${sendStyles.userInput}`}
                  type="text"
                  name="amountToSend"
                  placeholder="0.00"
                  required
                  autoComplete="off"
                />
                <br />
                <label htmlFor="amountToSend">They receive</label>
                <input
                  className={`form-control ${sendStyles.userInput}`}
                  type="text"
                  name="amountToReceive"
                  placeholder="0.00"
                  required
                  autoComplete="off"
                />
                <br />
                <button type="submit" className="btn btn-primary btn-lg">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Send;

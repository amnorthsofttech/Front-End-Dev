import paystyles from "../../styles/Pay.module.css";


function Paymentmethods() {
  return (
    <>
      <div className={`container ${paystyles.container}`}>
        <div className={`row ${paystyles.row}`}>
          <div className={`col ${paystyles.col}`}>
            <div className={`box ${paystyles.box}`}>
              <form>
                <h3>Add payment method</h3>
                <br />
                {/* ******* Payment type selection section ******* */}
                <label htmlFor="text">Legal name</label>
                <input
                  className={` form-control ${paystyles.userinput}`}
                  type="text"
                  placeholder="Enter your full legal name"
                  name="legalName"
                  required
                  maxLength={50}
                  autoComplete="off"
                />
                <br />
                <label htmlFor="number">Card number</label>
                <input
                  className={` form-control ${paystyles.userinput}`}
                  type="number"
                  placeholder="Enter your card number"
                  name="legalName"
                  required
                  maxLength={16}
                  autoComplete="off"
                />
                <br />
                <p>
                  Paying with credit will add a fee of 2.5% on each transaction
                  (Max 50$). We advise you to use a debit card:)
                </p>
                <br />
                <button
                  type="submit"
                  className={`btn btn-primary btn-lg ${paystyles.siginbutton}`}
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Paymentmethods;

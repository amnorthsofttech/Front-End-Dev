import sendstyles from "../../styles/Send.module.css";
function Send() {
  return (
    <>
      <div className={`container ${sendstyles.container}`}>
        <div className={`row ${sendstyles.row}`}>
          <div className={`col ${sendstyles.col}`}>
            <div className={`box ${sendstyles.box}`}>send</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Send;

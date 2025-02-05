// ==========================
// send inputs
// ==========================
export type sendInput = {
  amountToSend: number;
  amountToReceive: number;
  currencyToSend: string;
  currencyToReceive: string;
  Rate: number;
  feeToSend: number;
  totalCostToSend: number;
  paymentProcessorFee: number;
};
// ==========================
// Type for invalid email message
// ==========================
export type errorMsg = string;

export type isInputValid = boolean;
// ==========================
// Initial state for the user inputs
// ==========================
export const initialSendInputs: sendInput = {
  amountToSend: 0,
  amountToReceive: 0,
  currencyToSend: "CAD",
  currencyToReceive: "USD",
  Rate: 0,
  feeToSend: 0,
  paymentProcessorFee: 0,
  totalCostToSend: 0,
};

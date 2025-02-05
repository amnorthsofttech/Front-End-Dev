// ==========================
// user inputs
// ==========================
export type existingUser = {
  email: string;
  password: string;
};
// ==========================
// Initial state for the user inputs
// ==========================
export const initialUserInputs: existingUser = { email: "", password: "" };

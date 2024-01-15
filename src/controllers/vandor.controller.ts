import type { VandorDoc } from "../models";
import { getVandors } from "../services";
import { asyncHndler, validatePassword } from "../utility";

const vandorLogin = asyncHndler(async (req, res, next) => {
  const { email, password } = req.body;

  const existingVendor = (await getVandors({
    email: email,
  })) as VandorDoc | null;

  if (!existingVendor) {
    return res.status(400).json({ message: "A vandor is not Exist" });
  }

  const isPasswordValid = validatePassword(
    password,
    existingVendor?.password,
    existingVendor?.salt,
  );

  if (!isPasswordValid) {
    return res.status(400).json({ message: "Password is not valid" });
  }

  return existingVendor;
});

export { vandorLogin };

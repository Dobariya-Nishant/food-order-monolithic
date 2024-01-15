import { genSalt, hash } from "bcrypt";

async function generateSalt() {
  return await genSalt();
}

async function generatePassword(password: string, salt?: string) {
  if (!salt) {
    salt = await generateSalt();
  }
  const hashedPassword = await hash(password, salt);
  return { salt, hashedPassword };
}

async function validatePassword(
  password: string,
  savedPassword?: string,
  salt?: string,
) {
  const { hashedPassword } = await generatePassword(password, salt);
  if (hashedPassword === savedPassword) {
    return true;
  }
  return false;
}

export { generatePassword, validatePassword };

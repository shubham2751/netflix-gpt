export const validateData = (username = null, email, password) => {
  let isNameValid = false;
  if (username) {
    isNameValid = /^[a-zA-Z][a-zA-Z0-9_-]{2,15}$/.test(username);
  }

  if (username && !isNameValid) {
    return "Name is Invalid";
  }

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isEmailValid) {
    return "Email is Invalid";
  }

  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
    password
  );

  if (!isPasswordValid) {
    return "Password is Invalid";
  }

  return null;
};

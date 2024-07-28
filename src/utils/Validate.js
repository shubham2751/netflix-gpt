export const validateData = (username = null, email, password) => {
  let isNameValid = false;
  if (username) {
    isNameValid = /^[a-zA-Z ]{2,30}$/.test(username);
  }

  if (username && !isNameValid) {
    return "Name is Invalid";
  }

  const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
    email
  );

  if (!isEmailValid) {
    return "Email is Invalid";
  }

  const isPasswordValid = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/.test(
    password
  );

  if (isPasswordValid) {
    return "Password is Invalid";
  }

  return null;
};

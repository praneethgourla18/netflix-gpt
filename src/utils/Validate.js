export const validate = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email pattern validation
  const passwordRegex = /^.{8,}$/; // Password must be at least 8 characters

  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);

  if (!isEmailValid) {
    return "Email is not valid";
  }

  if (!isPasswordValid) {
    return "Password must be at least 8 characters";
  }

  return null; // All validations passed
};

export const validateName = (email, password, name) => {
  const nameRegex = /^[A-Za-z\s]{3,}$/; // Name must be at least 3 characters (letters and spaces only)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email pattern validation
  const passwordRegex = /^.{8,}$/; // Password must be at least 8 characters

  const isNameValid = nameRegex.test(name);
  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);

  if (!isNameValid) {
    return "Name is not valid";
  }

  if (!isEmailValid) {
    return "Email is not valid";
  }

  if (!isPasswordValid) {
    return "Password must be at least 8 characters";
  }

  return null; // All validations passed
};

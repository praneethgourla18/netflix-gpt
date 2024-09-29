export const validate = (email,password) => {
  
  const isEmailValid = email.includes("@"); 
  
  // const isFullNameValid = fullName ? fullName.includes(" ") : true; 
    
  const isPasswordValid = password.length >= 8;

  // if (!isFullNameValid) {
  //   return "Full Name must contain at least a first and last name";
  // }
  
  if (!isEmailValid) {
    return "Email is not valid";
  }
  
  if (!isPasswordValid) {
    return "Password must be at least 8 characters";
  }

  return null; // All validations passed
};

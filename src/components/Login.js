import { useState, useRef } from "react";
import Header from "./Header";
import { validate, validateName } from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);  // false means sign-up, true means sign-in
  const [data, setData] = useState(null);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const clicked = () => {
    setIsSignIn(!isSignIn);

    // Clear the input fields
    if (emailRef.current) emailRef.current.value = "";
    if (passwordRef.current) passwordRef.current.value = "";
    if (nameRef.current) nameRef.current.value = "";
    setData(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    let validationResult = null;

    if (!isSignIn) {
      const fullName = nameRef.current.value;
      validationResult = validateName(email, password, fullName);
      if (validationResult) {
        setData(validationResult);
        return;
      }

      // Sign-up process
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          // Update user profile with full name
          return updateProfile(user, { displayName: fullName });
        })
        .then(() => {
          setData("Successfully signed up!");
        })
        .catch((error) => {
          setData(`${error.code}: ${error.message}`);
        });

    } else {
      // Sign-in process
      validationResult = validate(email, password);
      if (validationResult) {
        setData(validationResult);
        return;
      }

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // User signed in
          setData("Successfully signed in!");
        })
        .catch((error) => {
          setData(error.message);
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_small.jpg"
          alt="Netflix"
        />
      </div>

      <form onSubmit={handleSubmit} className="w-3/12 p-12 bg-black absolute my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="text-3xl py-2 font-semibold">
          {!isSignIn ? "Sign Up" : "Sign In"}
        </h1>

        {!isSignIn && 
          <input 
            type="text" 
            placeholder="Full Name" 
            ref={nameRef}
            className="p-3 my-3 w-full bg-gray-700 bg-opacity-60 focus:border-blue-500" 
          />
        } 

        <input 
          type="text" 
          placeholder="Email Address" 
          ref={emailRef} 
          className="p-3 my-3 w-full bg-gray-700 bg-opacity-60" 
        />

        <input 
          type="password" 
          placeholder="Password" 
          ref={passwordRef} 
          className="p-3 my-3 w-full bg-gray-700 bg-opacity-60" 
        />

        {data && <p className="text-red-500 text-md font-semibold">{data}</p>}

        <button className="p-4 my-3 w-full bg-red-700 rounded-lg font-semibold">
          {!isSignIn ? "Sign Up" : "Sign In"}
        </button>

        <p className="cursor-pointer my-2 hover:underline" onClick={clicked}>
          {!isSignIn ? "Already on Netflix? Sign In!" : "New to Netflix? Join now!"}
        </p>
      </form>
    </div>
  );
}

export default Login;

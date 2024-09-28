import { useState, useRef } from "react";
import Header from "./Header";
import { validate } from "../utils/Validate";

function Login() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [data, setData] = useState(null);

  const clicked = () => {
    setIsSignIn(!isSignIn);
  };

  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const fullName = isSignIn ? null : nameRef.current.value; // Access only if not signing in
    const password = passwordRef.current.value;

    const validationResult = validate(email, fullName, password);
    setData(validationResult);
  };

  return (
    <div>
      <Header />
      <div>
        <img 
          className="w-[100%] h-[100%] absolute object-cover" 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_small.jpg" 
          alt="Netflix" 
        />
      </div>

      <form onSubmit={handleSubmit} className="w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="text-3xl py-2 font-semibold">
          {isSignIn ? "Sign Up" : "Sign In"}
        </h1>

        {!isSignIn && 
          <input 
            type="text" 
            placeholder="Full Name" 
            ref={nameRef} 
            className="p-3 my-3 w-full bg-gray-700" 
          />
        }

        <input 
          type="text" 
          placeholder="Email address" 
          ref={emailRef} 
          className="p-3 my-3 w-full bg-gray-700" 
        />

        <input 
          type="password" 
          placeholder="Password" 
          ref={passwordRef} 
          className="p-3 my-3 w-full bg-gray-700" 
        />

        {data && <p className="text-red-500">{data}</p>}

        <button className="p-4 my-3 w-full bg-red-700">
          {isSignIn ? "Sign Up" : "Sign In"}
        </button>

        <p className="cursor-pointer my-2 hover:underline" onClick={clicked}>
          {isSignIn ? "Already on Netflix? Sign In!" : "New to Netflix? Join now!"}
        </p>
      </form>
    </div>
  );
}

export default Login;

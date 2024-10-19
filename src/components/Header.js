import {onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO, userIcon } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
function Header() {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = ()=>{
    signOut(auth).then(() => {

    })
    .catch((error) => {
      
      navigate("/error")
      
    });
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {

      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse")
      } 
      else {
        dispatch(removeUser());
        navigate("/")
      }

    });
  },[])
  
  return (
    <div className="absolute bg-gradient-to-b from-black w-full z-10 flex justify-between">
      <img
        src={LOGO}
        alt="logo"
        className="w-44 px-4 py-2"
      />
      {user && <div className="px-4 py-4 flex text-white">
        <img  className="w-10 h-10" src={userIcon}/>
       
        <button onClick={handleSignOut} >(SignOut)</button>
      </div>}
    </div>
  );
}

export default Header;

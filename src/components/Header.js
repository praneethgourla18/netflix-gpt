import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO, userIcon } from "../utils/constants";
import { auth } from "../utils/firebase";
import { changeGptSearch } from "../utils/gptSlice";
import { addUser, removeUser } from "../utils/userSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptClicked = useSelector((store) => store.gpt.gptSearch);
  const [clicked, setClicked] = useState(false);
 
  const handleGptClick = () => {
     dispatch(changeGptSearch());
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful, handle accordingly
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="absolute bg-gradient-to-b from-black w-full z-10 flex justify-between items-center">
      <img src={LOGO} alt="logo" className="w-44 px-4 py-2" />

      {user && (
        <div className="px-4 py-4 flex items-center text-white relative">

          <button className="p-2 bg-white text-black font-semibold mr-8 rounded-lg" onClick={handleGptClick}> {gptClicked ? "Home" : "GPT Search"}</button>
          <div className="flex items-center gap-2">
            
            <img className="w-10 h-10 rounded-full" src={userIcon} alt="user icon" />
            <button
              className="text-xl focus:outline-none"
              onClick={handleClick}
            >
              {clicked ? "▲" : "▼"}
            </button>
          </div>

          <aside
            className={`absolute top-16 right-0 bg-black text-white text-lg shadow-lg rounded-lg w-48 p-4 transition-transform duration-300 ease-in-out transform ${
              clicked ? 'translate-x-0' : 'hidden'
            }`}
            style={{ zIndex: 20,transform: clicked ? 'translateX(0)' : 'translateX(100%)' }}
          >
            <div className="text-white font-lg p-2 mb-2">
              <h1 className="font-sans hover:italic">Hii {user.displayName} 🖐</h1>
            </div>
            <ul className="flex flex-col gap-2">
              <li>
                <button className="w-full text-left p-2 hover:outline hover:outline-2 hover:outline-gray-400 transition duration-200 ease-in-out rounded-lg">
                  Edit profile
                </button>
              </li>
              <li>
                <button className="w-full text-left p-2 hover:outline hover:outline-2 hover:outline-gray-400 transition duration-200 ease-in-out rounded-lg">
                  Watch history
                </button>
              </li>
              <li>
                <button
                  onClick={handleSignOut}
                  className="w-full text-left p-2 hover:outline hover:outline-2 hover:outline-red-600 transition duration-200 ease-in-out rounded-lg"
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </aside>
        </div>
      )}
    </div>
  );
}

export default Header;

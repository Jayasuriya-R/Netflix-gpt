import React, { useState, useEffect, useRef } from "react";
import logo from "../Assets/images.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { netflixLogo } from "../utils/constant";
import { toggleGptSearch } from "../utils/gptSlice";
import { Support_Language } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const [signOutbtn, setSignOutbtn] = useState(false);
  const user = useSelector((store) => store.user);
  const gptBtn = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  const handleChangeLang = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <>
      <div className="absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between items-center">
        <img className="w-44 mx-auto md:mx-0" src={netflixLogo} alt="logo" />

        {user && (
          <div className="flex p-2 justify-between">
            {" "}
            {/* Add relative here */}
            {gptBtn && (
              <select
                className="bg-gray-900 text-white p-2 rounded-xs cursor-pointer"
                onChange={handleChangeLang}
              >
                {Support_Language.map((ln) => {
                  return (
                    <option key={ln.identifier} value={ln.identifier}>
                      {ln.name}
                    </option>
                  );
                })}
              </select>
            )}
            <button
              className="px-2 text-xs md:px-4 py-2 m-2 border-purple-800 border-2 hover:bg-purple-800  text-white font-bold rounded-lg cursor-pointer"
              onClick={handleGptSearch}
            >
              {gptBtn ? "Home Page" : " GPT-Search"}
            </button>
            <p className="text-white mt-2 px-3 text-lg font-bold md:text-2xl">
              Hi {user?.displayName} 🙋
            </p>
            <img
              className="h-10 w-10 mr-4 rounded-full cursor-pointer"
              src={logo}
              onClick={() => setSignOutbtn(!signOutbtn)}
              alt="user-profile"
            />
          </div>
        )}
      </div>

      {signOutbtn && (
        <button
          className="absolute right-6 top-9 md:absolute md:right-6 md:top-16 bg-black border-2 p-2 mt-2 border-orange-500 rounded-[5px] text-white font-bold hover:bg-orange-500 hover:text-black cursor-pointer z-10"
          onClick={handleSignout}
        >
          Sign Out
        </button>
      )}
    </>
  );
};
export default Header;

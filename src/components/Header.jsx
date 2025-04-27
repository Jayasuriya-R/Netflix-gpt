import React, { useState, useEffect } from "react";
import logo from "../Assets/images.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { netflixLogo } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const [signOutbtn, setSignOutbtn] = useState(false);
  const user = useSelector((store) => store.user);
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

  return (
    <>
      <div className="absolute px-8 w-screen py-2 bg-gradient-to-b  from-black z-10 flex justify-between items-center">
        <img className="w-44" src={netflixLogo} alt="logo" />

        {user && (
          <div className="flex items-center gap-2">
            <p className="text-white font-bold text-2xl">
              Hi {user?.displayName} 🙋‍♀️
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
          className="absolute right-2 top-18 bg-black border-2 p-2 border-orange-500 rounded-[5px] text-white font-bold hover:bg-orange-500 hover:text-black cursor-pointer z-10"
          onClick={handleSignout}
        >
          Sign Out
        </button>
      )}
    </>
  );
};
export default Header;

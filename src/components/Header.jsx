import React, { useState } from "react";
import logo from "../Assets/profile-user.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const [signOutbtn, setSignOutbtn] = useState(false);
  const user = useSelector(store => store.user)

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <>
      <div className="absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
        <img
          className="w-44"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
  
        {user && (
          <div className="flex items-center gap-2">
            <p className="text-cyan-900 font-bold text-2xl">Hi {user?.displayName} 🙋‍♂️</p>
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
          className="absolute right-6 top-18 bg-black border-2 p-2 border-orange-500 rounded-3xl text-white font-bold hover:bg-orange-500 hover:text-black cursor-pointer"
          onClick={handleSignout}
        >
          Sign Out
        </button>
      )}
    </>
  );
}
export default Header;

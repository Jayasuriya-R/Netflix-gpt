import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validation";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from '../utils/userSlice'
import { netflixBg } from "../utils/constant";


//rafce - react arrow func component export
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch()
  

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggelSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    // checkValidData()
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMessage(msg);

    if (msg) return;

    if (!isSignIn) {
      //signup form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
            
            const{uid,email,displayName} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}));
            
              // ...
            })
            .catch((error) => {
              const errorMessage = error.message;
              setErrorMessage(errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          // ..
        });
    } else {
      //signin form
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          //console.log(user)
          const { uid, email, displayName } = user;
          dispatch(addUser({ uid, email, displayName }));
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />

      <div className="absolute ">
        <img
          src={netflixBg}
          alt="logo"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black/70 w-3/12 my-36 mx-auto right-0 left-0 flex flex-wrap rounded-lg text-white "
      >
        <h1 className=" m-2 mb-3 font-bold text-2xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="my-3 p-2 bg-gray-600 rounded-xs w-full"
          />
        )}

        <input
          ref={email}
          type="Email"
          placeholder="Email Address"
          required
          className="my-3 p-2 bg-gray-600 rounded-xs w-full"
        />

        {errorMessage?.includes("Email") && (
          <p className="text-red-600">{errorMessage}</p>
        )}

        <input
          ref={password}
          type="password"
          placeholder="Password"
          required
          className="my-3 p-2 bg-gray-600 rounded-xs w-full"
        />

        {(errorMessage?.includes("Password") ||
          errorMessage?.includes("auth/invalid-credential")) && (
          <p className="text-red-600">{errorMessage}</p>
        )}
        <button
          className="p-2 my-3 bg-red-700 rounded-xs  w-full cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="py-4 text-xs font-bold cursor-pointer"
          onClick={toggelSignInForm}
        >
          {isSignIn
            ? "New to Netflix?  Sign Up Now."
            : "Already Registered User? Sign In"}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;

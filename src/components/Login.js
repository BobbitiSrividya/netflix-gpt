import React, { useRef, useState } from 'react'
import { checkValidateData } from '../utils/Validate';
import Header from './Header'
import { auth } from "../utils/firebase.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { useDispatch } from 'react-redux';
import { LOGO_AVATAR, NETFLIX_BG } from '../utils/constants.js';
import { addUser } from '../utils/userSlice';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const confirmPassword = useRef(null);
  const dispatch = useDispatch();


  function toggleSignInForm() {
    setIsSignInForm(!isSignInForm);
  }

  const handleSignInButtonClick = () => {
    var validCheck = null;
    if (isSignInForm) {
      validCheck = checkValidateData(email.current.value, password.current.value, null, isSignInForm);
    } else {
      validCheck = checkValidateData(email.current.value, password.current.value, confirmPassword.current.value, isSignInForm);
    }
    setErrorMessage(validCheck);
    if (validCheck !== null) return;
    if (isSignInForm) {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: LOGO_AVATAR,
          }).then(() => {
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL : photoURL}));
          }).catch((error) => {
          });
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
        
    }
  }

  return (
    <>
      <Header />
      <div className='absolute'>
        <img src={NETFLIX_BG}
          alt="bg-logo" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='absolute w-4/12  p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <div className='font-semibold text-3xl my-4 mx-2'> {isSignInForm ? "Sign In" : "Sign Up"}</div>
        {isSignInForm ? '' : <input type="text" ref={name} placeholder='Name' className="p-4 my-3 w-full rounded-md bg-gray-500 " />}
        <input ref={email} type="text" placeholder='Email or Phone Number' className="p-4 my-3 w-full rounded-md bg-gray-500 " />
        <input ref={password} type="password" placeholder='Password' className="p-4 my-3 w-full rounded-md bg-gray-500 " />
        {isSignInForm ? '' : <input type="password" placeholder='Confirm Password' ref={confirmPassword} className="p-4 my-3 w-full rounded-md bg-gray-500 " />}
        <p className='text-red-500'>{errorMessage}</p>
        <button onClick={handleSignInButtonClick} className="p-3 my-4 rounded-md bg-red-600  fill-current w-full"> {isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='px-3 cursor-pointer' onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In now"}</p>
      </form>
    </>
  )
}

export default Login    

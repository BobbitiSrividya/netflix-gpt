import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {auth} from "../utils/firebase.js" 
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from '../utils/constants.js';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL : photoURL}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  } ,[]);

  return (
    
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (<div className='flex'>
        <img className='w-12 h-12' alt="usericon" src=  {user.photoURL} />
        <button onClick={handleSignOut} className="font-bold text-white ">
          (Sign Out)
        </button>
      </div>)}
    </div>
  )
}

export default Header
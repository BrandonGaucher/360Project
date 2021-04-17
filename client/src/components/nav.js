import React, { useContext } from "react";
import "../styles/Nav.css";

//router
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

//get the current user

const Nav = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <div className='navbar'>
        <Link to='/' class='active'>
          Home
        </Link>
        <input
          type='text'
          onClick='search_func()'
          placeholder='Search..'
        ></input>
        {user == "Guest" ? (
        <Link to='/register' id='btn-signup' className='nav-a'>
          Sign up
        </Link>
          
          ) : (
               <Link to='/profile' id='btn-signup' className='nav-a'>
            My Profile
            </Link>
          )}
        {user == "Guest" ? (
           <Link to='/login' id='btn-login' className='nav-a'>
           Login
         </Link>

        ) : (
          <button className='nav-a' id='btn-profile' onClick={
            async() => {
              setUser("Guest");
            }
          }>
            Logout
          </button>
        )}
      </div>
    </>
  );
};

export default Nav;

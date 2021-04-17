import React, { useContext, useState } from "react";
import "../styles/Nav.css";
import Axios from "axios";
//router
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

//get the current user

const Nav = () => {
  const [titleSearch, setTitleSearch] = useState("");

  const search = () => {
    Axios.get("http://localhost:8000/search", {
      title: titleSearch,
    })
      .then((response) => {
        const allPosts = response.data.postData;
        console.log(allPosts);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <div className='navbar'>
        <Link to='/' class='active'>
          Home
        </Link>
        <form
          action=''
          onSubmit={(e) => {
            search();
          }}
        >
          <input
            id='userInput'
            type='text'
            onChange={(e) => {
              setTitleSearch(e.target.value);
            }}
            placeholder='Search..'
          ></input>
          <input id='btn-search' type='submit' placeholder='Search'></input>

          <Link to='/login' id='btn-login' className='nav-a'>
            Login
          </Link>
          <Link to='/register' id='btn-signup' className='nav-a'>
            Sign up
          </Link>
          {user == "Guest" ? (
            <br></br>
          ) : (
            <Link to='/profile' id='btn-profile' className='nav-a'>
              My Profile
            </Link>
          )}
        </form>
      </div>
    </>
  );
};

export default Nav;

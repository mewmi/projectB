import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import EchoSmall from '../images/EchoSmall.png';
=======
import EchoSmall from "../images/EchoSmall.png";
import { useAuthContext } from "../context/authentication";
>>>>>>> 85454f67a4dfc54b92123b856d67fad89916a2d3

const Navbar = () => {
  return (
<<<<<<< HEAD
    <nav>
    <div className='w-full dark:bg-black bg-gray-400' >
      <ul className='flex flex-col p-4 md:flex-row'>
       <li>
       <img className="mx-auto" src={EchoSmall} alt="echosound" />
       </li>
=======
    <div className="w-full dark:bg-black bg-gray-400">
      <ul className="flex flex-col p-4 md:flex-row">
>>>>>>> 85454f67a4dfc54b92123b856d67fad89916a2d3
        <li>
          <img className="mx-auto" src={EchoSmall} alt="echosound" />
        </li>
        <li>
          <Link to="/">
            <button>HomePage</button>
          </Link>
        </li>
        <li>
          <Link to="/songs">
            <button>All Songs</button>
          </Link>
        </li>
        <li>
          <Link to="/new-song">
            <button>Add new Song</button>
          </Link>
        </li>
<<<<<<< HEAD
        <li>
          <Link to="/signup"><button>Sign Up</button></Link>
        </li>
=======

        {(user && (
          <li>
            <span>{user.name}</span>
          </li>
        )) || (
          <>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
>>>>>>> 85454f67a4dfc54b92123b856d67fad89916a2d3
      </ul>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import EchoSmall from '../images/EchoSmall.png';
=======
import { useAuthContext } from "../context/authentication";
>>>>>>> 1664847cf3590b689370deef063dbd81599b0a8a

const Navbar = () => {
  const { user } = useAuthContext();

  return (
    <div className='w-full dark:bg-black bg-gray-400' >
      <ul className='flex flex-col p-4 md:flex-row'>
       <li>
       <img className="mx-auto" src={EchoSmall} alt="echosound" />
       </li>
        <li>
          <Link to="/"><button>Back to HomePage</button></Link>
        </li>
        <li>
          <Link to="/songs"><button>All Songs</button></Link>
        </li>
        <li>
          <Link to="/new-song"><button>Add new Song</button></Link>
        </li>
<<<<<<< HEAD
        <li>
          <Link to="/login"><button>Log In</button></Link>
        </li>
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
>>>>>>> 1664847cf3590b689370deef063dbd81599b0a8a
      </ul>
    </div>
  );
};

export default Navbar;

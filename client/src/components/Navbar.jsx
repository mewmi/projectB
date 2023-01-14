import React from "react";
import { Link } from "react-router-dom";
import EchoSmall from '../images/EchoSmall.png';

const Navbar = () => {
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
        <li>
          <Link to="/login"><button>Log In</button></Link>
        </li>
        <li>
          <Link to="/signup"><button>Sign Up</button></Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

import SearchBar from "../SearchBar";
import React from "react";
import { Link } from "react-router-dom";
import {HiMiniMoon} from "react-icons/hi2"
import {BiLogOut} from "react-icons/bi"
import './Nav.css'

const Nav = ({onSearch, setAccess}) => {
  const handleLogOut = () => {
    setAccess(false);
}
//     return (
//       <nav>
//         <SearchBar onSearch={onSearch} />
//         <button>
//           <Link to="/about">About</Link>
//         </button>
//         <button>
//           <Link to="/home">Home</Link>
//         </button>
//       </nav>
//     );
// }
return (
  <nav>
      <div className="home_form">
        <div className="nav_content">
          <div className='search_bar'>
        <SearchBar  onSearch={onSearch}/>
          </div>
        <div className="links_form">
            <ul>
              {/* <li className="icon"> <a> <HiMiniMoon /></a> </li> */}

              <li><Link to={'/about'}><a href="/about">About</a></Link> </li>

              <li><Link to={'/home'}> <a href="/home">Home</a></Link></li>

              <li><Link to={'/favorites'}><a href="/favorites">Favorites</a></Link></li>

            </ul>
        </div>
            <button className="button_moon" >
              <HiMiniMoon />
            </button>
            <button className="button_bar" onClick={handleLogOut}>
              <BiLogOut/>
            </button>
      </div>
      </div>
  </nav>
)
}

export default Nav;

    

import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import './Navbar.css';
function Navbar () {

    const [prince,setPrince] = useState(false);
    
    useEffect(() => {

        window.addEventListener('scroll', () =>{
      
            window.scrollY > 500 ?setPrince(true) : setPrince(false);

        })


    },[]);

    return(
     <nav className={`container ${prince? 'dark-nav' : ''}`}>
        <h1>The Dreamers</h1>
     <ul>
 
 <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
 <li><Link to="project" smooth={true} offset={-260} duration={500}>Project</Link></li>
 <li><Link to="about" smooth={true} offset={-150} duration={500}>About us</Link></li>
 <li>
          <Link to="member" smooth={true} offset={-150} duration={500}>
            Members
          </Link>
        </li>
 <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn">Contact us</Link></li>  


     </ul>


     </nav>

    )



}

export default Navbar
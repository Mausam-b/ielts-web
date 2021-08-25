import React from 'react'

function Listening() {
    return (
        <div>
            
        </div>
    );
}
export default Listening;

// import React, { useState } from 'react';
// import {NavLink, Link} from 'react-router-dom';
// // import styled from 'styled-components';

// import './navigation.scss';
// // import Dropdown from './Dropdown';

// const Navigation = () => {

//   const [status, setStatus] = useState('close');

//   // const handleClick = () => setClick(!click);


//   // const [menuOpen,setMenuOpen] = useState(false);

//   // const closeMobileMenu = () => setClick(false);

//   return (
//     <header className="header">
//       <div className="container">
//         <div className="wrapper">
//           <div className="left">
//             <NavLink className= "nav_banner" to="/">
//               <h1 className="nav__logo">IELTS <span>JOURNEY</span></h1>
//             </NavLink>

//             <ul className="nav__bar">
//               <li className="nav__item">
//                 <Link to='/' className="nav__links">
//                   Home
//                 </Link>
//               </li>

//               <li className="nav__item">
//                 <Link to='/Reading' className="nav__links">
//                   Reading
//                 </Link>
//               </li>

//               <li className="nav__item">
//                 <Link to='/Writing' className="nav__links">
//                   Writing
//                 </Link>
//               </li>

//               <li className="nav__item">
//                 <Link to='/Task1' className="nav__links t__1">
//                   Task 1
//                 </Link>
//               </li>

//               <li className="nav__item">
//                 <Link to='/Task2' className="nav__links t__2">
//                   Task 2
//                 </Link>
//               </li>

//               <li className="nav__item">
//                 <Link to='/Listening' className="nav__links">
//                   Listening
//                 </Link>
//               </li>

//               <li className="nav__item">
//                 <Link to='/Speaking' className="nav__links">
//                   Speaking
//                 </Link>
//               </li>

//               <li className="nav__item">
//                 <Link to='/Faq' className="nav__links">
//                   Faq
//                 </Link>
//               </li>

//               <li className="nav__item">
//                 <Link to='/Contact' className="nav__links">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="right">
//           <nav className="nav__menu">
//             <div className="Burgermenu" role="button"
//               onClick={()=> setStatus(status === 'open' ? 'close' : 'open')}>
//               <i className={status}></i>
//               <i className={status}></i>
//               <i className={status}></i>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }
// export default Navigation;
// import React, {useState} from 'react';
// import {NavLink, Link} from 'react-router-dom';
// import './navigation.scss';
// // import cdown from '../images/cdown.svg';
// // import menu from '../images/menu.png';
// import '../main.scss';

// function Navigation() {

//   const [isMenu, setisMenu] = useState(false);
//   const [isResponsiveclose, setResponsiveclose] = useState(false);
//   const toggleClass = () => {
//     setisMenu(isMenu === false ? true : false);
//     setResponsiveclose(isResponsiveclose === false ? true : false);
//   };

//   let boxClass = ["main-menu menu-right menuq1"];
//   if(isMenu) {
//     boxClass.push('menuq2');
//   }else{
//     boxClass.push('');
//   }

//   const [isMenuSubMenu, setMenuSubMenu] = useState(false);

//   const toggleSubmenu = () => {
//     setMenuSubMenu(isMenuSubMenu === false ? true : false);
//   };

//   let boxClassSubMenu = ["sub__menus"];
//   if(isMenuSubMenu) {
//     boxClassSubMenu.push('sub__menus__Active');
//   }else {
//     boxClassSubMenu.push('');
//   }

//   return(
//     <>
//       <header className="header__middle">
//         <div className="container">
//           <div className="row">
//             {/* Add Logo  */}
//             <div className="header__middle__logo">
//               <NavLink exact activeClassName='is-active' to="/">
//                 <h1>IELTS_JOURNEY</h1>
//                 {/* <img src={logo} alt="logo" />  */}
//               </NavLink>
//             </div>
//             <div className="header__middle__menus">
//               <nav className="main-nav">
//                 {/* Responsive Menu Button */}
//                 {isResponsiveclose === true ? <> 
//                     <span className="menubar__button" 
//                       style={{ display: 'none' }} onClick={toggleClass}>
//                     </span>
//                 </> : <> 
//                     <span className="menubar__button" style={{ display: 'none' }} 
//                       onClick= {toggleClass}>    
//                     </span>
//                 </>}

//                 <ul className={boxClass.join(' ')}>
//                   <li  className="menu-item">
//                     <NavLink exact activeClassName='is-active'
//                       onClick={toggleClass} to={`/`}>
//                       Home 
//                     </NavLink> 
//                   </li>

//                   <li className="menu-item">
//                     <NavLink onClick={toggleClass} 
//                       activeClassName='is-active' 
//                       to={`/Reading`}> 
//                       Reading
//                     </NavLink> 
//                   </li>

//                   <li onClick={toggleSubmenu} 
//                     className="menu-item sub__menus__arrows">   
//                     <Link to={`/Writing`}> 
//                       Writing 
//                     </Link>
//                       <ul className={boxClassSubMenu.join(' ')}> 
//                         <li> 
//                           <NavLink onClick={toggleClass}
//                             activeClassName='is-active'
//                             to={`/Task1`}>
//                             Task1
//                           </NavLink>
//                         </li>

//                         <li>
//                           <NavLink onClick={toggleClass}
//                             activeClassName='is-active'
//                             to={`/Task2`}>
//                             Task2
//                           </NavLink>
//                         </li>

//                       </ul>
//                   </li>

//                   <li className="menu-item">
//                     <NavLink onClick={toggleClass}
//                       activeClassName='is-active'
//                       to={`/Speaking`}>
//                       Speaking
//                     </NavLink>
//                   </li>

//                   <li className="menu-item">
//                     <NavLink onClick={toggleClass}
//                       activeClassName='is-active'
//                       to={`/Listening`}>
//                       Listening
//                     </NavLink>
//                   </li>

//                   <li className="menu-item">
//                     <NavLink onClick={toggleClass}
//                       activeClassName='is-active'
//                       to={`/Faq`}>
//                       Faq
//                     </NavLink>
//                   </li>

//                   <li className="menu-item">
//                     <NavLink onClick={toggleClass}
//                       activeClassName='is-active'
//                       to={`/Contact`}>
//                       Contact
//                     </NavLink>
//                   </li>

//                 </ul>
//               </nav>     
//             </div>          
//           </div>
// 	      </div>
//       </header>
//     </>
//   );
// }
// export default Navigation;


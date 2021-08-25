// import React from 'react';
// import { MenuItems } from './Submenu';
// import { Link } from 'react-router-dom';
// import './dropdown.scss';


// class Dropdown extends React.Component {
//     constructor (){
//         super();
        
//         this.state = {
//             displayMenu: false
//         };

//         this.showDropdownMenu = this.showDropdownMenu.bind(this);
//         this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
//     };

//     showDropdownMenu(event) {
//         event.preventDefault();
//         this.setState({ displayMenu: true }, () => {
//             document.addEventListener('click', this.hideDropdownMenu);
//         });
//     }
//     hideDropdownMenu() {
//         this.setState({ displayMenu: false }, () => {
//             document.removeEventListener('click', this.hideDropdownMenu);
//         });
//     }

//     render()
//     {
//         return (
//             <div className="dropdown" style = {{background: "red", width: "150px"}}>
//                 <div className="button" onClick={this.showDropdownMenu}>
//                     Writing
//                 </div>
//                 <ul> {MenuItems.map((item, index) => {
//                         return (
//                             <li key={index}>
//                                 <Link className={item.cName} to={item.path}> 
//                                     {item.title}
//                                 </Link>
//                             </li>
//                         );
//                        })}  
//                     </ul>
//             </div>
//         );
//     } 
// }
// export default Dropdown;

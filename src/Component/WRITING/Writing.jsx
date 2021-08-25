import React from 'react';

function Writing() {
    return (
        <div>

{/* import Topbar from './Topbar';
import Dropdown from './Dropdown';


function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 360) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
    };
    
    const onMouseLeave = () => {
        if (window.innerWidth < 360) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
    };
    
    return (
        <>
           { <Topbar />}  
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                       IELTS_J
                    </Link>

                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/reading' className="nav-links" onClick={closeMobileMenu}>
                                Reading
                            </Link>
                        </li>

                        <li className="nav-item" onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}>
                            <Link to='/writing' className="nav-links" onClick={closeMobileMenu}>
                                Writing
                                   <i className="blink_me fas fa-caret-down" />
                            </Link>
                            {dropdown && <Dropdown />}
                        </li>

                        <li className="nav-item">
                            <Link to='/speaking' className="nav-links" onClick={closeMobileMenu}>
                                Speaking
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/listening' className="nav-links" onClick={closeMobileMenu}>
                                Listening
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/faq' className="nav-links" 
                                onClick={closeMobileMenu}>
                                Faq
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
} */}
            
        </div>
    )
}
export default Writing;
import { useState } from 'react'
import '../styles/navbar.css'

const navItems = [{
    name: "About",
    href: "#about"
},
{
    name: "Experience",
    href: "#experience"
},
{
    name: "Projects",
    href: "#projects"
},
{
    name: "Skills",
    href: "#skills"
},
{
    name: "Contact",
    href: "#contact"
}]


export default function Navbar() {
    const [buttonMode, setButtonMode] = useState("fa-solid fa-moon");
  
    const toggleButtonMode = () => {
      if (buttonMode === "fa-solid fa-moon") {
        setButtonMode("fa-solid fa-sun");
      } else {
        setButtonMode("fa-solid fa-moon");
      }
    };
  
    return (
      <header className='header'>
        <nav className="nav-container">
          <a href="#landing" className='nav-logo'>Humber.dev</a>
          <div className="nav-menu">
            <ul>
              {navItems.map(navItem => (
                <li key={navItem.name}>
                  <a className='list-item' href={navItem.href}>{navItem.name}</a>
                </li>
              ))}
              <li className='switch-button' onClick={toggleButtonMode}>
                <i className={buttonMode}></i>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
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

export default function Navbar(){
    return(
        <header className='header'>
            <nav className="nav-container">
                <a href="#landing" className='nav-logo'>Humberto</a>
                
                <div className="nav-menu">
                <ul>
                    {navItems.map(navItem => (
                        <li key={navItem.name}>
                            <a className='list-item' href={navItem.href}>{navItem.name}</a>
                        </li>
                    ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}
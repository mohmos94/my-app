import './Navbar.css';

function Navbar() {

    return (
        <div>
            <h1></h1>
        <nav className="navbar">
            <a href="/" className='active'>Home</a>
            <a href="/project">Project</a>
            <a href="/contact">Contact</a>
            <div class="animation start-home"></div>
        </nav>
        </div>
    )

}

export default Navbar;
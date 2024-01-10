import { Link } from 'react-router-dom';
function SideNav() {
    return (
        <div class="main-container">
            <div className='button_head'>
                <Link to="/"> <button>About</button></Link>
                <Link to="/resume"> <button>Resume</button></Link>
                <Link to="/portfolio"><button>Portfolio</button></Link>
                <Link to="/blog"> <button>Blog</button></Link>
                <Link to="/contact"> <button>Contact</button></Link>
            </div>
        </div>


    )
}

export default SideNav;
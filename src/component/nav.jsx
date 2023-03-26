import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className='blog-nav'>
            <img className='logo' src="IMG_4814.PNG"></img>
            <ul className='navlist-container '>
                <li className='nav-item'>ABOUT</li>
                <li> <Link to="/bloginit" className=' nav-item '>BLOG</Link></li>
                <li><Link to="/signup" className=' nav-item '>SIGNUP</Link></li>
                <li><Link to="/login" className=' nav-item '>LOGIN</Link></li>
            </ul>
        </nav>

    )
}
export default Nav
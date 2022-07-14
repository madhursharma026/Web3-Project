import { Link } from 'react-router-dom'
import './Header.css'
import HeaderLogo from '../../Assets/HeaderLogo/HeaderLogo.jpeg';


function Header() {
    return (
        <>
            <nav className="navbar fixed-top" style={{ backgroundColor: "black" }}>
                <div className="container-md padding_left_after_md_scrn">
                    <Link className="navbar-brand p-0" to="/"><img className='header_logo' src={HeaderLogo} alt="#" /></Link>
                    <div className="d-flex">
                        <Link to="/login" className="btn btn-danger">Login</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;

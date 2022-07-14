import { Link } from 'react-router-dom'
import './Header.css'


function Header() {
    return (
        <>
            <nav className="navbar fixed-top" style={{ backgroundColor: "black" }}>
                <div className="container-md padding_left_after_md_scrn">
                    <Link className="navbar-brand p-0" to="/"><img className='header_logo' src="https://madhur-hq.monday.com/protected_static/12766587/resources/543146068/big-18CFB641-8F2D-4506-A856-E385B030E2B5.jpeg" alt="#" /></Link>
                    <div className="d-flex">
                        <Link to="/login" className="btn btn-danger">Login</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;

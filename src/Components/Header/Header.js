import { Link } from 'react-router-dom'
import './Header.css'


function Header() {
    return (
        <>
            <nav className="navbar fixed-top" style={{backgroundColor:"#e3f2fd"}}>
                <div className="container-md padding_left_after_md_scrn">
                    <Link className="navbar-brand" to="/"><img src="https://madhur-hq.monday.com/protected_static/12766587/resources/543146068/big-18CFB641-8F2D-4506-A856-E385B030E2B5.jpeg" alt="#" height='50px' /></Link>
                    <div className="d-flex">
                    <Link to="/login" className="btn btn-danger">Login</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;

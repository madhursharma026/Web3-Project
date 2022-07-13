import { Link } from 'react-router-dom'
import './Header.css'


function Header() {
    return (
        <>
            <nav className="navbar fixed-top" style={{backgroundColor:"#e3f2fd"}}>
                <div className="container-md padding_left_after_md_scrn">
                    <Link className="navbar-brand" to="/">Web3 Projects</Link>
                    <div className="d-flex">
                    <Link to="/login" className="btn btn-danger">Login</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;

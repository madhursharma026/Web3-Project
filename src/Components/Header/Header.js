import { Link } from 'react-router-dom'
import './Header.css'
import HeaderLogo from '../../Assets/HeaderLogo/HeaderLogo.jpeg';


function Header() {

    async function getAccount(){
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
        const account = accounts[0];
        return account
    }

    function connectButtonOnClick(){
        if (typeof window !== 'undefined'){
            getAccount().then((response) => {
                console.log(response)
            }).catch(() => console.log("User didn't connect with metamask"))
        }
    }


    return (
        <>
            <nav className="navbar fixed-top" style={{ backgroundColor: "black" }}>
                <div className="container-md padding_left_after_md_scrn">
                    <Link className="p-0 navbar-brand" to="/"><img className='header_logo' src={HeaderLogo} alt="#" /></Link>
                    <div className="d-flex">
                        {/* <Link to="/login" className="btn btn-danger">Login</Link> */}
                        <button type="button" className="btn btn-danger" onClick={() => connectButtonOnClick()}>Login</button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;


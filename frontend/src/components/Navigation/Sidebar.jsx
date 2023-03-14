import { useState } from "react"
import './Navigation.css'
import { NavLink } from 'react-router-dom'
import { navData } from "../../lib/navdata"
import MenuIcon from '@mui/icons-material/Menu';
import LoginModal from "../Auth/LoginModal";
import SignUpModal from "../Auth/SignUpModal";

export default function Sidebar () {
    const [open, setOpen] = useState(false)
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showSignUpModal, setShowSignUpModal] = useState(false)

    function toggleOpen(){
        setOpen(!open)
    }

    return (
        <div className={open?'sidenav':'sidenavClosed'}>
            <button className={open?"menu-buttonOpen":"menu-button"} onClick={toggleOpen}>
                <MenuIcon/>
            </button>
            {navData.map(item => <NavLink key={item.id} className='sideitem' to={item.link}><div>{item.icon}</div>
                {console.log(open)}
                <span className={open?'linkText':'linkTextClosed'}>{item.text}</span>
            </NavLink>)}

            {/* <button className="login-modal-button" onClick={() => setShowLoginModal(true)}>Log in</button> */}
            <div className='sideitem'>
                <LoginModal  showLoginModal={showLoginModal}
                    open={open}
                    setShowLoginModal={setShowLoginModal}
                    setShowSignUpModal={setShowSignUpModal}
                    /> <span className={open?"linkText":"linkTextClosed"}>Login</span>
            </div>
        </div>

        
    )
}
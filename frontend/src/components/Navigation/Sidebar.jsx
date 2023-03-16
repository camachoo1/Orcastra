import { useState } from "react"
import './Navigation.css'
import { NavLink } from 'react-router-dom'
import { navData } from "../../lib/navdata"
import MenuIcon from '@mui/icons-material/Menu';
import LoginModal from "../Auth/LoginModal";
import SignUpModal from "../Auth/SignUpModal";
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from "../../store/session";

// import HomeIcon from '@mui/icons-material/Home';
// import TravelExploreIcon from '@mui/icons-material/TravelExplore';
// import SettingsIcon from '@mui/icons-material/Settings';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CreateIcon from '@mui/icons-material/Create';
import SetMealIcon from '@mui/icons-material/SetMeal';
import WavesIcon from '@mui/icons-material/Waves';
// import MessageIcon from '@mui/icons-material/Message';



export const ModalContext = React.createContext();


export default function Sidebar({open, setOpen}) {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    // const [open, setOpen] = useState(false)
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showSignUpModal, setShowSignUpModal] = useState(false)

    const navData = sessionUser ? [
        {
            id: 0,
            icon: <WavesIcon />,
            text: "Ideas Feed",
            link: "/feed"
        },
        {
            id: 1,
            icon: <CreateIcon />,
            text: "Create",
            link: "/ideas/new"
        },
        {
            id: 2,
            icon: <SetMealIcon />,
            text: "Profile",
            link: `/users/${sessionUser._id}/ideas`
        },
        {
            id: 3,
            icon: <InfoOutlinedIcon />,
            text: "About",
            link: "/"
        }
    ] : [
        {
            id: 0,
            icon: <WavesIcon />,
            text: "Ideas Feed",
            link: "/feed"
        }
    ]

    function toggleOpen() {
        setOpen(!open)
    }

    function handleLogout() {
        dispatch(logout())
    }
    

    return (

        <div className="sidenav-container">
            <div className={open ? 'sidenav' : 'sidenavClosed'}>
                <div>
                <button className={open ? "menu-buttonOpen" : "menu-button"} onClick={toggleOpen}>
                    <MenuIcon />
                </button>
                <div className="sideitem-container">
                    {navData.map(item => <NavLink key={item.id} className='sideitem' to={item.link}>
                        <div>{item.icon}</div>
                        {/* {console.log(open)} */}
                        <span className={open ? 'linkText' : 'linkTextClosed'}>{item.text}</span>
                    </NavLink>)}
                </div>
                </div>

                <div className={open?'sideitem-authfunctions-containerOpen':""}>
                { !sessionUser ? 
                    <ModalContext.Provider value={{open, showLoginModal, setShowLoginModal, showSignUpModal, setShowSignUpModal, SignUpModal}}>
                        <SignUpModal/>
                        <LoginModal/>
                    </ModalContext.Provider> : 
                    <div className='sideitem' onClick={handleLogout}> 
                        <div> <LogoutIcon/> </div>
                        <span className={open ? 'linkText' : 'linkTextClosed'}>Log out</span>
                    </div>
                    }
                </div>
            </div>
        </div>

    )
}
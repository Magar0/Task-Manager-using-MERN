import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";

import './Navbar.css'
import Avatar from "../avatar/Avatar";
import logo from '../../assets/logo.png'
import { logout } from "../../store/slices/authSlice";
import { setCurrentUser } from "../../store/slices/currentUserSlice";


const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.currentUser)
    const changeInState = useSelector(state => state)

    const handleLogout = () => {
        localStorage.clear();
        dispatch(logout());
        dispatch(setCurrentUser(null))
        navigate("/");

    }



    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = jwtDecode(token)
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                handleLogout();
                alert("Session timeout Log in again");
                navigate('/auth')
                console.log("Logged out");
            }
        }
    }, [changeInState])

    return (
        <>
            <nav className="main-nav">
                <div className="navbar">
                    <Link to='/' className="nav-item nav-logo">
                        <img className="logo" src={logo} alt='logo' />
                    </Link>
                    <Link to='/' className="nav nav-item nav-btn">About</Link>
                    <Link to='/' className="nav-item nav-btn">Products</Link>
                    <Link to='/' className="nav-item nav-btn">For Teams</Link>

                    <form action="">
                        <input type="text" placeholder="Search..." />
                        <FaSearch className="search-icon" />
                    </form>

                    {user === null ?
                        <Link to='/auth' className="nav-item nav-link"> Log In</Link> :
                        <>
                            <Link to={`/users/${user?.data?._id}`} className="nav-avatar"> <Avatar>{user?.data?.name.charAt(0).toUpperCase()}</Avatar> </Link>
                            <button className="nav-item nav-link" onClick={handleLogout}>Log Out</button>
                        </>
                    }

                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar
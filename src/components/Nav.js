import React, {useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    useEffect (()=>{
        const auth = localStorage.getItem("user");
        if(auth){
            navigate('/')
        }
    }, [])
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }
    return(
       
       <div>
       <img 
       alt="logo"
       className = "logo"
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxw0eitGgbS6Y3kJODK5lGbWxUV8sONkQUZg&usqp=CAU"/>
           { auth ? <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update Products</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout({JSON.parse(auth).name}) </Link></li> 
            </ul>
            : 
            <ul className="nav-ul nav-right">
            <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to="/login">Login</Link></li>
            </ul>
           }
        </div>
    )
}

export default Nav;
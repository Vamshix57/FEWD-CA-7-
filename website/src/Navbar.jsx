import React from 'react';
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  const{findBook,setFIndBook}=props.check
  return (
    <div className="nav1">
      <img src="https://media.licdn.com/dms/image/C560BAQEmI-b9h9lQ9Q/company-logo_200_200/0/1662977309233/kalvieducation_logo?e=2147483647&v=beta&t=5SHkVfvYHYtAF_5MxcVfP6N9ag2GCzYryCrFm1pxsQ8"></img>
      <input type="text" placeholder="Search Here..." onChange={(e)=>{
        setFIndBook(e.target.value)
      }} className="input"></input>
      <Link to={'Form'}>
        <button>Register</button>
      </Link>
    </div>
  );
}



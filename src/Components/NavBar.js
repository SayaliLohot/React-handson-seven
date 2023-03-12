import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='nav'>
        
<Link to={"/"} className='nav__child'>
<p className='nav_p'>Home</p>  

</Link>
<Link to={"/student"} className='nav__child'>
<p className='nav_p'>Student</p>  

</Link>
<Link to={"/contactUs"} className='nav__child'>
<p className='nav_p'>Contact Us</p>  

</Link>

    </div>
  )
}

export default NavBar
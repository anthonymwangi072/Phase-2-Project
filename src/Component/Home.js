import React from 'react';
import { NavLink } from 'react-router-dom';
import homeimg from '../Images/it.png'
import "../Component/Css/HomeAbout.css"
const Home =()=>{
return(
<div>

    <div className='mainSection'>
        <div className='contextBox'>
            <h1>Tech IT solutions</h1>
            <h2>Tech Solutions Made Easy</h2>
            <p>Let us manage your technology so you can manage your business...</p>
            <div className='btnBox'>
                <div className='btn'>
                <NavLink to loading="/about"className="readMore"activeClassName='activeItem'>readMore</NavLink>

                </div>
            </div>
        </div>
    
    <div className='imgContainer'>
        <img src ={homeimg}  alt="home"/>
    </div>
</div>
</div>
)
}
export default Home;
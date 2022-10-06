import React from 'react';
import { NavLink } from 'react-router-dom';
import homeimg from '../Images/it.png'
const Same =()=>{
return(
<div>

<div className='mainSection'>
        <div className='contextBox'>
            <h1>Tech Solutions Made Easy</h1>
            <p>Let us manage your technology so you can manage your business...</p>
            <div className='btnBox'>
                <div className='btn'>
                <NavLink to loading="/about"className="readMore"activeClassName='activeItem'>readMore</NavLink>

                </div>
            </div>
            <div className='imgContainer'>
        <img src ={homeimg} alt="home"/>
    </div>
    </div>
</div>
</div>

)
}
export default Same;
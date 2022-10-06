import React from 'react';
import homeimg from '../Images/it.png'
import "../Component/Css/ServiceStyle.css"

const Services =()=>{
return(
<div>

    <h1>Our Services</h1>
    <div className='services'>
        <div className='card'>
            <h2>Web Development</h2>
            <img src={homeimg} alt='service1' />
            <p> We pride ourselves in creating world class websites</p>
        </div>
        <div className='card'>
            <h2>Front End Development</h2>
            <img src={homeimg} alt='service1' />
            <p> We pride ourselves in creating world class websites</p>
        </div>
    
    </div>



</div>

)
}
export default Services;
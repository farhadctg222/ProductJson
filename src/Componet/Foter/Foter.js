import React from 'react';
import  './Foter.css';
import { Link } from 'react-router-dom';

const Foter = () => {
    const foter = 
        {
            name: 'Mohammad Farhad',
            dev: 'www.RupaliSpoartsClub.org',
            detail:'Mern Stack',
            border:'1px solid green'

        }
        const detail= 
        {
            address: 'Contact Us',
            ad: 'Faruk Chamber, Agrabad, Chattogram',
            ads: 'Click Here',
            border:'1px solid yellow'
        }
    

    return (
        <div className="foter-continar">
        <div className="detailName">
            <h1>{foter.name}</h1>
            <h4>{foter.dev}</h4>
            <p>{foter.detail}</p>

        </div>
        <div className="address">
            <h1>Address:{detail.address}</h1>
            <h3>{detail.ad}</h3>
        <Link to="/details"> <button className='btn'>click here</button></Link> 
        </div>
           

     



        </div>
       
       
            
      
    );
};
<Link to="/Details">click here</Link>

export default Foter;
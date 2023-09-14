import React, {} from 'react';
import './Shipment.css'
import { Link } from 'react-router-dom';

const Shipment = () => {
   
    return (
        <div class="container">
        <h1>Client Address Form</h1>
        <form action="#" method="post">
            <label for="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" required></input>
            
            <label for="email">Email Address:</label>
            <input type="text" id="email" name="email" required></input>

            <label for="phone">Phone Number:</label>
            <input type="text" id="phone" name="phone" required></input>
            
            <label for="streetAddress">Street Address:</label>
            <input type="text" id="streetAddress" name="streetAddress" required></input>

          
            
            <label for="city">City:</label>
            <input type="text" id="city" name="city" required></input>
            
           
            
           
            
          

            <label>Preferred Contact Method:</label>
            <input type="checkbox" id="emailContact" name="contactMethod" value="Email"></input>
            <label for="emailContact">Email</label>
            <input type="checkbox" id="phoneContact" name="contactMethod" value="Phone"></input>
            <label for="phoneContact">Phone</label>
            <input type="checkbox" id="mailContact" name="contactMethod" value="Mail"></input>
            <label for="mailContact">Mail</label>
            
            <label for="emergencyContactName">Emergency Contact Name:</label>
            <input type="text" id="emergencyContactName" name="emergencyContactName"></input>
            
            <label for="relationship">Relationship:</label>
            <input type="text" id="relationship" name="relationship"></input>
            
            <label for="emergencyContactPhone">Emergency Contact Phone:</label>
            <input type="text" id="emergencyContactPhone" name="emergencyContactPhone"></input>
            
           

            <br/>
            <Link to="/order"> <button>Submit</button></Link>
        </form>
       
    </div>


    );
};

export default Shipment;
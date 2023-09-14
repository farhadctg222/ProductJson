import React, { useContext } from 'react';
import { CreatContex } from '../../App';
import { Navigate, Routes,redirect } from 'react-router-dom';
import Shipment from '../Shipment/Shipment';

const PrivetRoute = ({children,...rest}) => {
  const [logInUser,setLogInuser]=  useContext(CreatContex)

return logInUser.Email?(
    children):( <Navigate to="/loginForm"/>
)

};

export default PrivetRoute;
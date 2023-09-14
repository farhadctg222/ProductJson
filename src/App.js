import './App.css';
import Header from './Componet/Header/Header';
import Home from './Componet/Home/Home';
import {BrowserRouter,Routes,Route} from"react-router-dom"
import Product from './Componet/Product/Product';
import Review from './Componet/Review/Review';
import NotFound from './Componet/NotFound/NotFound';
import MangeInventor from './Componet/MangeInventor/MangeInventor';
import Order from './Componet/Order/Order';
import ProductDetals from './Componet/ProductDeatals/ProductDetals';
import Foter from './Componet/Foter/Foter';
import Details from './Componet/Details/Details';
import Reg from './Componet/Registaion/Reg';
import SignUp from './Componet/SignUp/SignUp';
import Login from './Componet/Login/Login';
import Personal from './Componet/Personal/Personal';
import Shipment from './Componet/Shipment/Shipment';
import { Fragment, createContext, useState, Children } from 'react';
import PrivetRoute from './Componet/PrivetRoute/PrivetRoute';
export const CreatContex = createContext()


function App(props) {
  const [logInUser,setLogInuser]= useState({})
  return (
    <CreatContex.Provider value = {[logInUser,setLogInuser]}>
      <h1>email:{logInUser.Email}</h1>
     

   <BrowserRouter>
    
    <Header></Header>
   
   
      <Routes>
   
    <Route path={"/product/:productid"}element={<ProductDetals/>}></Route>
    <Route path='/' element={<Product/>}></Route>
      <Route path='/shop' element={<Product/>}></Route>
      <Route path='/review'element={<Review/>}></Route>
      <Route path='/manage'element={<MangeInventor/>}></Route>
      
      <Route path="shipment"  element={<PrivetRoute> <Shipment/> </PrivetRoute>}/>
      
     
     
      <Route path='/order'element={<Order/>}></Route>
      <Route path='*'exact element={<NotFound/>}></Route>
      <Route path='/details'element={<Details/>}></Route>
      <Route path='/login'element={<Reg/>}></Route>
      <Route path='/signup'element={<SignUp/>}></Route>
      
      <Route path='/loginForm'element={<Login/>}></Route>
      <Route path='/personal'element={<Personal/>}></Route>
     
      </Routes>
   
   
    <Foter></Foter>
  
    
    </BrowserRouter>
    </CreatContex.Provider>
     
  );
}

export default App;

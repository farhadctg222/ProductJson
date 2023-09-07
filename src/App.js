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


function App() {
  return (
    <div>
      

    <BrowserRouter>
    <Header></Header>
    

    <Routes>
    <Route path={"/product/:productid"}element={<ProductDetals/>}></Route>
    <Route path='/' element={<Product/>}></Route>
      <Route path='/shop' element={<Product/>}></Route>
      <Route path='/review'element={<Review/>}></Route>
      <Route path='/manage'element={<MangeInventor/>}></Route>
      
      
      <Route path='/order'element={<Order/>}></Route>
      <Route path='*'exact element={<NotFound/>}></Route>
      <Route path='/details'element={<Details/>}></Route>

    </Routes>
    <Foter></Foter>
    
    </BrowserRouter>

   
      
    </div>
     
  );
}

export default App;

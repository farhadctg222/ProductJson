import { useParams,Link} from 'react-router-dom';
import Shop from '../Shop/Shop';
import fakedata from '../fakedata/Fakedata';

const ProductDetals = () => {
    // const [products,setproduct]= useState([])
    const {productid}= useParams()
//    console.log(products)
//     useEffect(()=>{
//         fetch('https://fakestoreapi.com/products')
//         .then(res=>res.json())
//         .then(data=>setproduct(data))
//     },[])
//    const adproduct = products.map(pd=>pd)
//    console.log(adproduct)
//    const sss = adproduct.find(show=>show.id==productid)
//    console.log(sss)
  
   const product = fakedata
   
   const sss = product.find(pd=>pd.id==productid)
   console.log(sss)
   const {image,title,description,price,id}= sss
    
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Product detail comming</h1>
            {/* <div className='shopContainer'>
            <div className="shopImage">
              <img src={image} alt="" />
              

            </div>
            <div className="shopDetail">
               <h1>{title}</h1>
               <p>{description}</p>
               <h4>Price ${price}</h4>
               <h4>Id: {id}</h4>
               <h3>Rating: {sss.rating.rate}  Count: {sss.rating.count} </h3>
               
                <button className='button' style={{padding:'20px',backgroundColor:'green',color:'white'}}>Bye Now</button>
            </div>
            
        </div> */}
        <Shop showaddcard={false} product={sss}></Shop>
           
        </div>
    );
};

export default ProductDetals;
import React from 'react';

const ProductReview = (props) => {
    console.log(props)
    const {title,price,id} = props.product
    return (
        <div style={{border:'1px solid green',marginBottom:'20px'}}>
            <div className="reviewItem">
                <h1>Title: {title}</h1>
                <h2>Price : ${price}</h2>
                <h4>Count: {id}</h4>
            </div>
            <button>Remove</button>
            
        </div>
        
    );
};

export default ProductReview;
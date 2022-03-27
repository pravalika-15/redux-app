import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// useSelector to get hold of any state we use in redux store

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
    // we have accessed the products and stored the value in products
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;



//  after getting data from server
// data need to be added to store
// we have to dispatch an action 
// so for this pupose we are using setproducts action which is going to take all products
// for dispatching we r using useDispatch hook
// product data is passed in to action setproducts
// the object will return an object (type, payload)
// this object will be taken by reducer
// and type will be  set_products and state should payload
// useParam to get parameters
// for product detail we use selected product action in dispatch
// access the selected product - we use useSelector - gives state access and returns state.product 

// reducers are added to combines reducer
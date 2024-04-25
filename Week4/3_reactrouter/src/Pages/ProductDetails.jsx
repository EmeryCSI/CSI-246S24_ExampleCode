import { useParams, useNavigate } from "react-router-dom";
import products from "../Data/products.json";
import { useEffect } from "react";
function ProductDetails() {
  //to get information from the url useParams
  const params = useParams();
  console.log(params);
  const { id } = params;
  //find the product with the matching id
  const product = products.find((product) => product.id == id);
  console.log(product);
  //navigate allows you to hit a route from javascript
  const navigate = useNavigate();
  //make effect that fires when product is assigned a value
  useEffect(() => {
    if (!product) {
      navigate("/notfound");
    }
  }, [product]);
  return (
    <>
      <h2>Product Details</h2>
      {/* conditionally render the product details */}
      {product && (
        <div className="card">
          <div className="card-header">
            <h3>
              {product.make} {product.model}
            </h3>
          </div>
          <div className="card-body">
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;

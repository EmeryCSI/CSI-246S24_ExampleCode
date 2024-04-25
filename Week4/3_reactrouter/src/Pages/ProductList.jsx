//get the product data
import products from "../Data/products.json";
import { Link } from "react-router-dom";
function ProductList() {
  console.log(products);
  return (
    <>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <p>
                {product.make} {product.model}
              </p>
              <Link to={"/productdetails/" + product.id}>Show Details</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ProductList;

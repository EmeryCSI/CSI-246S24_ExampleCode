import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/Navbar";
import ProductList from "./Pages/ProductList";
import ProductDetails from "./Pages/ProductDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Define a Routes component */}
      {/* Within the routes we make individual route components */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/notfound" element={<NotFound />} />
        {/* Wildcard - this will be hit if the route does not match anything else */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

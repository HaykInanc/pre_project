import { Route, Routes } from "react-router-dom";
import BasketPage from "../../pages/BasketPage";
import AboutPage from "../../pages/AboutPage";
import ProductDescrPage from "../../pages/ProductDescrPage";
import Products from "../Products";
import Nav from "../Nav";


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Products />}/>
        <Route path="/about" element={<BasketPage />}/>
        <Route path="/basket" element={<AboutPage />}/>
        <Route path="/product/:product_id" element={<ProductDescrPage />}/>
      </Routes>
    </div>
  );
}

export default App;
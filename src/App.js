import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
// import Navbar from "./Components/Navbar/Navbar";
// import NavbarMUI from "./Components/Navbar/NavbarMUI";
import NavbarMUIv2 from "./Components/Navbar/NavbarMUIv2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <NavbarMUIv2 />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1> error 404: Pagina no encontrada </h1>} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

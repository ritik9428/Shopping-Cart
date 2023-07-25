import React from "react";
import Products from "../Products/Products";
import SignUp from '../SignUp/SignUp';
import Cart from "../Cart/Cart";
import { Route , Routes} from "react-router-dom";

const Routes1 = ({productItems , cartItems , handleAddProduct , handleRemoveProduct , handleCartClear}) => {
    return (
    <div>
        <Routes>
            <Route path="/" element={<Products productItems={productItems} handleAddProduct={handleAddProduct} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart cartItems = {cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClear={handleCartClear}  />} />
        </Routes>
    </div>
    );
};

export default Routes1;
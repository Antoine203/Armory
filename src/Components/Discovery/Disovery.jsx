import React from "react";
import Product_Pitch from "./Features/Product_Pitch";
import Products from "./Features/Products";
import Navigation_Bar from "../../Components_UI_Model/Navigation_Bar/Navigation_Bar"

function Discovery (){
    return (
        <div>
            <Navigation_Bar />
            <Product_Pitch />
            <Products 
                param = "firearms"
                title = "Firearms"
            />
            <Products 
                param = "blades"
                title = "Blades"
            />
            <Products 
                param = "clothes"
                title = "Clothes"
            />
        </div>
    )
}

export default Discovery;
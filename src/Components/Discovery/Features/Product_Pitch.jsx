import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {createRef, useState, useEffect} from "react";
import CrossfadeImage from "react-crossfade-image";
// The most widely sought HK MP5 variant, the MP5A3 was first developed by Heckler & Koch in the mid-1960s.
// {require("../../../Data/Firearms/Submachine Rifles/MP5A3.jpeg")}



function Product_Pitch() {
    return (
        <div className="product-pitch" >
            {/* {images.map(imageData => (
                <CrossfadeImage src={imageData} />
            ))} */}
            <div className="product-pitch-vehicle"/>
            <div className="product-pitch-squad"/>
            <div className="product-pitch-tech"/>
        </div>
    );
}

export default Product_Pitch;
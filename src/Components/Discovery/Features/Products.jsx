import React, { useEffect, useState } from "react";


function Products(props) {
    const [item, setItem] = useState({});
    // Used for loading the data 
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const url = process.env.REACT_APP_API +props.param
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setItem(data);
                setLoading(false);
            });
    },[]);

    // Needs to load the data from the API first to avoid problems
    if (loading) return <h1>Loading....</h1>
    
    
    return (
        <div className="products">
            <h4>{props.title}</h4>
            <div className="products-scroller">
                {item.map(itemData => (
                    <div className="products-scroller-items">
                        <img src={itemData.Item_Image}/>
                    </div>
                ))}
            </div>
        </div>
        
    )
}


export default Products;
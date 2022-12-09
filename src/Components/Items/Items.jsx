import React, {useState, useEffect} from "react"
import Navigation_Bar from "../../Components_UI_Model/Navigation_Bar/Navigation_Bar"
import Filter from "./Features/Filter"
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Items (props) {

    const [item, setItem] = useState({});
    // Used for loading the data 
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const url = process.env.REACT_APP_API + "api/"+props.type
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
        <div>
            <Navigation_Bar />
           
            <div className="items-container">
                <Filter />
                <Container>
                        <Row >
                        {item.map(itemData => (
                            <Col md>
                                <Card style={{width: '18rem'}}>
                                    <Card.Img variant="top" src={itemData.Item_Image} />
                                    <Card.Body>
                                        <Card.Title>{itemData.Item_Name}</Card.Title>
                                        <Card.Text>{itemData.Item_Description}</Card.Text>
                                        <Card.Text>${itemData.Item_Price}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            ))}
                        </Row>
                    

                </Container>
                
            </div>

        </div>
    )
}

export default Items;
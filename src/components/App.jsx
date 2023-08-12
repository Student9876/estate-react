import React, { useState } from "react";
import NavbarComponent from "./NavbarComponent";
import SearchFilter from './SearchFilter'
import Card from "./Card";
import data from "../data"
import { Container, Row, Col } from "react-bootstrap";


function App() {

    // UseStates 
    const [filteredData, setFilteredData] = useState(data);
    // const [hearted, setHearted] = useState([]);

    function onClickFilter(parseParameters) {
        console.log(parseParameters)

        var newData;
        if (parseParameters.property_place !== "") {
            newData = data.filter(property => {
                return (property.property_place.toString() === parseParameters.property_place);
            })
        }
        if (parseParameters.Price.lPrice !== '') {
            newData = newData.filter(property => {
                return (Number(parseParameters.Price.lPrice) <= property.rent);
            })
        }
        if (parseParameters.Price.hPrice !== '') {
            newData = newData.filter(property => {
                return (Number(parseParameters.Price.hPrice) >= property.rent);
            })
        }
        if (parseParameters.property_type !== '') {
            newData = newData.filter(property => {
                return (Number(parseParameters.property_type) === property.property_type);
            })
        }

        if (parseParameters.fromDate!== "") {
            newData = newData.filter(property => {
                return (Number(property.date_of_availability.slice(0, 4) * 365 * 24 + Number(property.date_of_availability.slice(5, 7)) * 30 * 24 + Number(property.date_of_availability.slice(8, 11)) * 24 >= parseParameters.fromDate));
            })

        }
        setFilteredData(newData);
    }


    function onClickSearch(searchString) {
        if (searchString !== "") {
            const newData = data.filter(property => {
                return (searchString.toLowerCase() === property.city.toLowerCase());
            })
            setFilteredData(newData);
        }
    }

    // Functions to render liked properties 
    // function onHeart(property_id){
    //     setHearted(prevValue =>{
    //         return [...prevValue , property_id];
    //     })
    // }


    // function inHeart(property_id){
    //     var val=0;
    //     data.forEach(property=>{
    //         if(property.property_id === property_id){
    //             val=1;
    //             return val;
    //         }

    //     })
    //     return val;
    // }

    // function renderLiked(){
    //     const newData = data.map(property=>{
    //         return inHeart(property.property_id)
            
    //     })
    //     setFilteredData(newData);
    // }

    return <>
        <NavbarComponent 
        />
        <SearchFilter
            onClickFilter={onClickFilter}
            onClickSearch={onClickSearch}
        />
        <Container>
            <Row>
                {filteredData.map(property => {
                    return (
                        <Col lg={4} md={6} sm={12}>
                            <Card
                                previewImage={property.previewImage}
                                title={property.title}
                                address={property.address}
                                rent={property.rent}
                                bed={property.bed}
                                bath={property.bath}
                                dimension={property.dimension}
                                property_id={property.property_id}
                            />
                        </Col>
                    )
                }
                )}
            </Row>
        </Container>

    </>

}

export default App;
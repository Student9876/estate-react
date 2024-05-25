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
        var newData = null;
        if (parseParameters.property_place !== "") {
            if (newData === null) {
                newData = data.filter(property => {
                    return (property.property_place === parseParameters.property_place);
                })
            }
            else {
                newData = newData.filter(property => {
                    return (property.property_place === parseParameters.property_place);
                })
            }
        }
        if (parseParameters.Price.lPrice !== '') {
            if (newData === null) {
                newData = data.filter(property => {
                    return (Number(parseParameters.Price.lPrice) <= property.rent);
                })
            }
            else {
                newData = newData.filter(property => {
                    return (Number(parseParameters.Price.lPrice) <= property.rent);
                })
            }
        }
        if (parseParameters.Price.hPrice !== '') {
            if (newData === null) {
                newData = data.filter(property => {
                    return (Number(parseParameters.Price.hPrice) >= property.rent);
                })
            }
            else {
                newData = newData.filter(property => {
                    return (Number(parseParameters.Price.hPrice) >= property.rent);
                })
            }
        }
        if (parseParameters.property_type !== '') {
            if (newData === null) {
                newData = data.filter(property => {
                    return (Number(parseParameters.property_type) === property.property_type);
                })
            }
            else {
                newData = newData.filter(property => {
                    return (Number(parseParameters.property_type) === property.property_type);
                })
            }
        }

        if (parseParameters.fromDate !== "") {
            if (newData === null) {
                newData = data.filter(property => {
                    return (Number(property.date_of_availability.slice(0, 4) * 365 * 24 + Number(property.date_of_availability.slice(5, 7)) * 30 * 24 + Number(property.date_of_availability.slice(8, 11)) * 24 >= parseParameters.fromDate));
                })
            }
            else {
                newData = newData.filter(property => {
                    return (Number(property.date_of_availability.slice(0, 4) * 365 * 24 + Number(property.date_of_availability.slice(5, 7)) * 30 * 24 + Number(property.date_of_availability.slice(8, 11)) * 24 >= parseParameters.fromDate));
                })
            }

        }

        setFilteredData(newData);
    }

    function onClickSearch(searchString){
        if (searchString !== "") {
            const newData = data.filter(property => {
                return (searchString.toLowerCase() === property.city.toLowerCase());
            })
            setFilteredData(newData);
        }
    }


    // function onHeart(property_id) {
    //     if(property_id !== 'delete'){

    //         setHearted(prev_property_ids => {
    //             return [...prev_property_ids, property_id]
    //         })
    //     }else {

    //     }
    //     console.log(hearted);
    // }


    // function renderLikedProperties(){
    //     const newData = data.filter(property=>{
    //         return (hearted.includes(toString(property.property_id)));
    //     })
    //     setFilteredData(newData);
    // }

    return <>
        <NavbarComponent
        // renderLikedProperties={renderLikedProperties}
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
                                date={property.date_of_availability}
                                bed={property.bed}
                                bath={property.bath}
                                dimension={property.dimension}
                                property_id={property.property_id}
                                property_type={property.property_type}
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
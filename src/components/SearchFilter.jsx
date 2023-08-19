import React, { useState } from "react";
import { Col, Row, Container, NavDropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import data3 from "../data3"

function SearchFilter(props) {


    // UseStates 
    const [searchValue, setSearchValue] = useState("");
    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');
    const [Price, setPrice] = useState({
        lPrice: "",
        hPrice: ""
    });
    const [area, setArea] = useState("");
    const [cityName, setCityName] = useState("");
    const [property_type, setPropertyType] = useState("1");




    // Setting date 
    function onDateChange(event) {
        if (event.target.name === "fromDate") {
            const da = event.target.value
            const year = Number(da.slice(0, 4));
            const month = Number(da.slice(5, 7));
            const date = Number(da.slice(8, 11));
            setDate1(year * 365 * 24 + month * 30 * 24 + date * 24);
            console.log(date1)
        } else if (event.target.name === "toDate") {
            const da = event.target.value
            const year = Number(da.slice(0, 4));
            const month = Number(da.slice(5, 7));
            const date = Number(da.slice(8, 11));

            setDate2(year * 365 * 24 + month * 30 * 24 + date * 24);
            console.log(date2)

        }
    }


    // Function for handling all changable inputs 
    function handleChange(event) {
        console.log(event.target.value)
        if (event.target.name === "priceFrom") {
            setPrice(prevValue => {
                return {
                    lPrice: event.target.value,
                    hPrice: prevValue.hPrice
                }
            })
        }
        else if (event.target.name === "priceTo") {
            setPrice(prevValue => {
                return {
                    lPrice: prevValue.lPrice,
                    hPrice: event.target.value
                }
            })
        }
        else if (event.target.name === "searchInput") {
            setSearchValue(event.target.value);
        }

    }




    // Setting Area 
    function addArea(data) {
        setArea(data.property_place);
        console.log(area);
        setCityName(data.city)
    }

    function dropDownChanged(event) {
        const property = event.target.name;
        console.log(property)
        setPropertyType(property);
    }




    function handleClick() {
        const parseParameters = {
            property_place: area,
            fromDate: date1,
            toDate: date2,
            Price: Price,
            property_type: property_type
        };

        props.onClickFilter(parseParameters);

    }

    function handleGo(event) {
        props.onClickSearch(event.target.name);
    }


    return (
        <div className="searchFilterDiv">
            <div className="searchBarDiv">
                <Container>
                    <Row>
                        <Col>
                            <h1>Search Properties</h1>
                        </Col>
                        <Col>
                            <div className="searchBarBtn">
                                <input type="text" onChange={handleChange} name="searchInput" placeholder="Search for places" value={searchValue} />
                                <button className="btn btn-primary" onClick={handleGo} name={searchValue}>Go</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <br />

            {/* Filter Bar */}
            <div className="filterBarDiv">

                <Container>
                    <Row>
                        <Col xs={6} md={3}>
                            <div className="dropdownDivs">
                                <h4>Location</h4>
                                <NavDropdown title={cityName}>
                                    {data3.map(data => {
                                        return (
                                            <DropdownItem name={data.property_place} onClick={e => addArea(data)}>{data.city}</DropdownItem>
                                        )
                                    })}
                                </NavDropdown>
                            </div>
                        </Col>
                        <Col xs={12} md={3}>
                            <div className="dropdownDivs">
                                <h4>Between</h4>
                                <input type="date" name="fromDate" onChange={onDateChange}></input>
                                <br />
                                <label>to</label>
                                <br />
                                <input type="date" name="toDate" onChange={onDateChange}></input>
                            </div>
                        </Col>
                        <Col xs={12} md={3}>
                            <div className="dropdownDivs">
                                <h4>Price</h4>

                                <input name="priceFrom" onChange={handleChange} value={Price.lPrice} placeholder="from" /><br />
                                To<br />
                                <input name="priceTo" onChange={handleChange} value={Price.hPrice} placeholder="to" />

                            </div>
                        </Col>
                        <Col xs={12} md={4} lg={3}>
                            <div className="dropdownDivs">
                                <h4>Property Type</h4>
                                {(property_type === "1") ? "House" : (property_type === "2") ? "Land" : "Car"}
                                <NavDropdown>
                                    <DropdownItem onClick={dropDownChanged} name="1">House</DropdownItem>
                                    <DropdownItem onClick={dropDownChanged} name="2">Land</DropdownItem>
                                </NavDropdown>

                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="dropdownDivs">
                                <button className="btn btn-primary" onClick={handleClick}>Search</button>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}

export default SearchFilter;
import React, { useState } from "react";
import icon1 from "../icon/heart-regular.png"
import icon2 from "../icon/heart-solid.png"
import BedBath from "./BedBath";
import DateOfAvailability from "./DateOfAvailability";


function Card(props) {
    const [heartToggle, setToggleHeart] = useState(0);


    function toggleHeart(event) {
        setToggleHeart(!heartToggle);
        
        // if(!heartToggle) {props.onHeart(event.target.name);}
        // else {props.onHeart("delete");}
    }


    return (<div className="card cardDiv">
        <img class="card-img-top" src={props.previewImage} alt="Card cap" />
        <div class="card-body">
            <img className="iconButton" onClick={toggleHeart} name={props.property_id} src={(heartToggle) ? icon2 : icon1} alt="iconButton" />
            <h5 class="card-title">{props.title}</h5>
            <h5 class="card-title">$ {props.rent}/month</h5>
            <p class="card-text text-muted">{props.address}</p>
            <hr />
            {(props.property_type === 1) ? <BedBath bed={props.bed} bath={props.bath} /> : <DateOfAvailability date={props.date} />}

            <p class="card-text text-muted">Area: {props.dimension} sq.ft</p>
        </div>
    </div>
    )

}

export default Card;
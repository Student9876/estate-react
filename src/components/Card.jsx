import React, { useState } from "react";
import icon1 from "../icon/heart-regular.png"
import icon2 from "../icon/heart-solid.png"

import bed from "../icon/bed-solid.png"
import bath from "../icon/bath-solid.png"




function Card(props) {
    const [heartToggle, setToggleHeart] = useState(0);

    
    function toggleHeart(event) {
        setToggleHeart(!heartToggle);
        props.onHeart(event.target.name);
    }
    

    return (<div className="card cardDiv">
        <img class="card-img-top" src={props.previewImage} alt="Card cap" />
        <div class="card-body">
            <img className="iconButton" onClick={toggleHeart} name={props.property_id} src={(heartToggle) ? icon2 : icon1} alt="iconButton" />
            <h5 class="card-title">{props.title}</h5>
            <h5 class="card-title">Rs.{props.rent}/month</h5>
            <p class="card-text text-muted">{props.address}</p>
            <hr/>
            <p class="card-text text-muted"><img className="propertyIcons" src={bed} alt="bedIcon"/> {props.bed} {(props.bed>1)?"Bedrooms":"Bedroom"}</p>
            <p class="card-text text-muted"><img className="propertyIcons" src={bath} alt="bathIcon"/> {props.bath} {(props.bath>1)?"Bathrooms":"Bathroom"}</p>
            <p class="card-text text-muted">{props.dimension} sq.ft</p>
        </div>
    </div>
    )

}

export default Card;
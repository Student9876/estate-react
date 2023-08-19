import React from "react";
import bed from "../icon/bed-solid.png"
import bath from "../icon/bath-solid.png"



function BedBath(props) {

    return (
        <>
            <p class="card-text text-muted"><img className="propertyIcons" src={bed} alt="bedIcon"/> {props.bed} {(props.bed>1)?"Bedrooms":"Bedroom"}</p>
            <p class="card-text text-muted"><img className="propertyIcons" src={bath} alt="bathIcon"/> {props.bath} {(props.bath>1)?"Bathrooms":"Bathroom"}</p>
        </>
    )

}


export default BedBath;
import React from 'react'
import PropsType from 'prop-types'

const Rating=({value, text, color})=>{
    return (
        <>
            <span>
            <i style={{color: color}} className={value>=1 ? "fa-solid fa-star" : value==0.5 ? "fa-solid fa-star-half-stroke" : "fa-sharp fa-regular fa-star"}>
            </i>
        </span>
            <span>
            <i style={{color: color}} className={value>=2 ? "fa-solid fa-star" : value==1.5 ? "fa-solid fa-star-half-stroke" : "fa-sharp fa-regular fa-star"}>
            </i>
        </span>
            <span>
            <i style={{color: color}} className={value>=3 ? "fa-solid fa-star" : value==2.5 ? "fa-solid fa-star-half-stroke" : "fa-sharp fa-regular fa-star"}>
            </i>
        </span>
            <span>
            <i  style={{color: color}} className={value>=4 ? "fa-solid fa-star" : value==3.5 ? "fa-solid fa-star-half-stroke" : "fa-sharp fa-regular fa-star"}>
            </i>
        </span>
            <span>
            <i style={{color: color}} className={value>=5 ? "fa-solid fa-star" : value==4.5 ? "fa-solid fa-star-half-stroke" : "fa-sharp fa-regular fa-star"}>
            </i>
        </span>
        <span style={{margin: '0.5em'}}>
            {text}
        </span>
        </>
    );
}

//Setting default props for those components
Rating.defaultProps={
    color: "#face30"
}

//Data type 
Rating.prototype={
    value :  PropsType.number.isRequired,
    text : PropsType.string.isRequired,
    color: PropsType.string
}


export  default Rating;
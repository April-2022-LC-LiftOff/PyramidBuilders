import React from "react";

export default function showStarRating(rating){
    if (rating == 1) {
        return (<span>&#9733;</span>)
    } else if (rating == 2) {
        return (<span>&#9733; &#9733;</span>)                        
        
    } else if (rating == 3) {
        return  (<span>9733; &#9733; &#9733;</span>)
    } else if (rating == 4) {
        return  (<span>&#9733; &#9733; &#9733; &#9733;</span>)
    } else if (rating == 5) {
        return (<span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>)
    } else {
        return (<span>Unreviewed</span>)
    }
}
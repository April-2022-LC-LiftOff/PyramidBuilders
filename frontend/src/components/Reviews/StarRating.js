import React, {useState} from "react";
import "./StarRatingCSS.css";

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
    <div>
        {[...Array(5)].map((star, index) =>{
            index += 1;

         return (
            <button
             type="button"
             key={index}
             className={index <= (hover || rating) ? "on" : "off"}
             onClick={() => setRating(index)}
             onMouseEnter={() => setRating(index)}
             onMouseLeave={() => setRating(rating)}

             >
                <span className="star">&#9733;</span>
             </button>
         );
        })}
        
    </div>
    )
}
export default StarRating;
import React from 'react';

const ReviewSearchBox = (props) => {
    return (
        <div >
            <input
            className="form-control"
            value={props.value}
            onChange={(e)=> props.setSearchValue(e.target.value)}
            placeholder="Type movie name..."
            ></input>
        </div>
    )
}

export default ReviewSearchBox;
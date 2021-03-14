import React from 'react';

const Pet = (props) => {
    return(
        <li>
            <button className="delete-button">Delete</button>
            <div className="pet-element">
                <div className="badge">{props.pet.id}</div>
                <div className="name">{props.pet.name}</div>
                <div className="price">{props.pet.price}</div>
                <div className="description">{props.pet.description}</div>


            </div>
        </li>
    )
}
export default Pet;
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './SingleHacker.css'
const SingleHacker = (props) => {
    //console.log(props.hacker)
    const { name, country, img, age, salary ,expert} = (props.hacker)
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="container">
            <div className="single-hacker">
                <img src={img} alt={name} />
                <h5><span className="text-heading">Name:</span> {name}</h5>
                <h5><span className="text-heading" >Expert In:</span>{expert}</h5>
                <h5><span className="text-heading" >Country:</span>{country}</h5>
                <h5><span className="text-heading" >Age:</span>{age}</h5>

                <h5><span className="text-heading">Cost:</span> {salary}$</h5>
                <button className="btn-style" onClick={()=>props.handler(props.hacker)} >
                 {element} Purchase</button>



            </div>

        </div>
    );
};

export default SingleHacker;
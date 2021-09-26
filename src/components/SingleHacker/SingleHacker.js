import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './SingleHacker.css'
const SingleHacker = (props) => {
    //console.log(props.hacker)
    const { name, country, img, age, salary } = (props.hacker)
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="container">
            <div className="single-hacker">
                <img src={img} alt={name} />
                <h4>Name:{name}</h4>
                <h5>Country:{country}</h5>
                <p>Age:{age}</p>
                <p>Cost:{salary}$</p>
                <button className="btn-style" onClick={()=>props.handler(props.hacker)} >
                 {element} Purchase</button>



            </div>

        </div>
    );
};

export default SingleHacker;
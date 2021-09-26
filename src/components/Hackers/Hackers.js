import React, { useEffect, useState } from 'react';
import SingleHacker from '../SingleHacker/SingleHacker';
import './Hackers.css'
import Cart from '../Cart/Cart'

const Hackers = () => {

    const [hackers, sethackers] = useState([])
    const[cart,setcart]=useState([])

    useEffect(() => {
        fetch('hackers.JSON')
            .then(res => res.json())
            .then(data => sethackers(data))

    }, [])

    const eventHandler=(hackerInfo)=>{
        // console.log(hackerName,demand)
        const newCart=[...cart,hackerInfo]
        setcart(newCart)



    }


    return (

        <div className="hackers-container">
            <div className="hackers">


                {
                    hackers.map(hacker =>
                        <SingleHacker

                            key={hacker.key}
                            hacker={hacker}
                            handler={eventHandler}


                        >
                        </SingleHacker>
                    )
                }
            </div>
            <div>
             <Cart cart={cart}> </Cart>

            </div>

        </div>
    );
};

export default Hackers;
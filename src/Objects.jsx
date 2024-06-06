import {useState} from 'react'

function Objects(){

    const [object,setObject]=useState({year:2024,make:"Ford",model:"Mustang"})

    return(
        <div>
            <p>Your Favorite Car is: {object.year} {object.make} {object.model}</p>
        </div>
    );
}

export default Objects;
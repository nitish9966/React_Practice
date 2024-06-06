import {useState} from 'react'

function Objects(){

    const [object,setObject]=useState({year:2024,make:"Ford",model:"Mustang"})

    function handleYear(event){
        setObject({...object,year:event.target.value})
    }
    function handleMake(event){
        setObject({...object,make:event.target.value})
    }
    function handleModel(event){
        setObject({...object,model:event.target.value})
    }

    return(
        <div>
            <p>Your Favorite Car is: {object.year} {object.make} {object.model}</p>
            <input type='number' value={object.year} onChange={handleYear}/><br></br>
            <input type='text' value={object.make} onChange={handleMake}/><br></br>
            <input type='text' value={object.model} onChange={handleModel}/>
        </div>
    );
}

export default Objects;
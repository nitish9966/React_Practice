import {useState} from 'react'

function OnChange(){

    const [name,setName]=useState("Guest")
    const [quantity,setQuantity]=useState(0)
    const [comment,setComment]=useState("")
    const [payment,setPayment]=useState("")
    const [shipping,setShipping]=useState("")

    function handleName(event){
        setName(event.target.value)
    }
    function handleQuantity(event){
        setQuantity(event.target.value)
    }
    function handleComment(event){
        setComment(event.target.value)
    }
    function handlePayment(event){
        setPayment(event.target.value)
    }
    function handleShipping(event){
        setShipping(event.target.value)
    }
    return(
        <div>
            <input value={name} onChange={handleName} type='text'/>
            <p>Name: {name}</p>
            <input value={quantity} onChange={handleQuantity} type='Number'/>
            <p>Quantity: {quantity}</p>
            <textarea value={comment} onChange={handleComment} placeholder='Enter the product details'></textarea>
            <p>Comment: {comment}</p>
            <select value={payment} onChange={handlePayment}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="GiftCard">GiftCard</option>
            </select>
            <p>Payment Method: {payment}</p>
            <label>
                <input type='radio' value='PickUp' checked={shipping==="PickUp"} onChange={handleShipping}/>
                PickUp
            </label>
            <label>
                <input type='radio' value='Delivery' checked={shipping==="Delivery"} onChange={handleShipping}/>
                Delivery
            </label>
            <p>Shipping Status: {shipping}</p>
        </div>
    )
}

export default OnChange;
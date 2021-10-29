import './index.css';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import Item from './Item'
const axios = require('axios');

const Record = () => {

    const {id} = useParams()
    const [order, setOrder] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [hall, setHall] = useState('')

    useEffect(() => {
        axios.get("https://swiftys-server.glitch.me/api/orders/order/" + id)
            .then(res => {
                setOrder(res.data)
                setIsLoading(false)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        // const blog = {title, body, author}
        // console.log(blog)
        // setIsLoading(true)
        // fetch('http://localhost:8000/blogs', {
        //     method: 'POST',
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(blog)
        // }).then(() => {
        //     console.log("new blog added")
        //     setIsLoading(false);
        //     history.push('/');
        // })
    }
   
    return (
    <div className="edit">
        {isLoading && <div>Loading...</div>}
        {order && 
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group"> 
                <label>Name: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={order.address.name}
                    onChange={(e) => setName(e.target.value)}
                    />
                <label>Contact: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={order.address.phone}
                    onChange={(e) => setContact(e.target.value)}
                    />
                <label>Email: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={order.address.email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <label>Hall: </label>
                <select class="form-control" id="exampleFormControlSelect1" value={order.hall} onChange={(e) => setHall(e.target.value)}>
                    <option>Hall 4</option>
                    <option>Hall 5</option>
                    <option>Hall 6</option>
                </select>
                <input type="text" className="form-control classname" value={order.totalCost} readOnly />
                {order.cart.map(item => {
                    return <Item item={item} key={item.id}/>
                })}
                
                </div>
                <div className="form-group">
                <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
            </form>
        </div>
           
        }
    </div>
   )
}

export default Record
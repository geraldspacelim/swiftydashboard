import OrderList from './OrderList';
import { useState, useEffect } from 'react';
const axios = require('axios');

const Home = () => {
    const [orders, setOrders] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        axios.get("https://swiftys-server.glitch.me/api/orders/getOrders")
            .then(res => {
                setOrders(res.data)
                setIsLoading(false)
            }).catch(err => {
                console.log(err)
            })
    })

    return ( 
        <div className="home">
            {isLoading && <div>Loading...</div>}
            {orders && <OrderList orders={orders}/>}
        </div>
     );
}
 
export default Home;
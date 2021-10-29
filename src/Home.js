import OrderList from './OrderList';
import { useState, useEffect } from 'react';
const axios = require('axios');

const Home = () => {
    const [orders, setOrders] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [requestData, setRequestData] = useState(new Date())
    
    useEffect(() => {
        axios.get("https://swiftys-server.glitch.me/api/orders/getOrders")
            .then(res => {
                setOrders(res.data)
                setIsLoading(false)
            }).catch(err => {
                console.log(err)
            })
    }, [requestData])

    return ( 
        <div className="home">
            {isLoading && <div>Loading...</div>}
            {orders && <OrderList orders={orders} setRequestData={setRequestData}/>}
        </div>
     );
}
 
export default Home;
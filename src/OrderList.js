import {Link} from "react-router-dom";
import Order from "./Order"
import './index.css'

const OrderList = ({orders}) => { 

    return ( 
        <div className="blog-list">
             <table className="table table-hover">
                <thead className="thead-light">
                    <tr>
                    <th>Order ID</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Used Promo Code</th> 
                    <th>Total Cost</th>
                    <th>Datetime Purchased</th>
                    <th>Status</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {orders.map((order) => (
                    <Order order={order} key={order._id}/>
                ))}
                </tbody>
            </table>             
        </div>
     );
}
 
export default OrderList;
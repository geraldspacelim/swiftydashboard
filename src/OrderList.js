import {Link} from "react-router-dom";
import Order from "./Order"

const OrderList = ({orders}) => { 

    const allOrders = () => {
        {orders.map((order) => (
            <Order order={order} key={order.id}/>
            // <div className="blog-preview" key={order.id}>
            //     <Link to={`/blogs/${order.id}`}>
            //          <h2>{order.title}</h2>
            //          <p>Written by {order.author}</p>
            //     </Link>
            // </div>
        ))}
    }
    return ( 
        <div className="blog-list">
             <table className="table table-hover">
                <thead className="thead-light">
                    <tr>
                    <th>Order ID</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Cart</th>
                    <th>Total Cost</th>
                    </tr>
                </thead>
                <tbody>
                {orders.map((order) => (
                    <Order order={order} key={order.id}/>
                ))}
                </tbody>
            </table>             
        </div>
     );
}
 
export default OrderList;
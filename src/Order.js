const Order = ({order, key}) => { 
    return ( 
        <tr>
            <td>{order.orderId}</td>
            <td>{order.address.name}</td>
            <td>{order.address.phone}</td>
            <td>fsefs</td>
            <td>{order.totalCost}</td>
        </tr>
     );
}
 
export default Order;
import { useHistory } from "react-router-dom";
import { FaCheck, FaTelegramPlane, FaTimes, FaUndo, FaTrashAlt } from "react-icons/fa";

const Order = ({order, deleteRecord, verifyRecord}) => { 
    const history = useHistory();
    
    const handleRowClick = () => {
      history.push(`/invoice/${order.orderId}`);
    }
    
    const convertDatetime = (dt) => {
        const d = new Date(dt)
        return d.toLocaleString()
    }


    return (
            <tr onClick={handleRowClick}>
                <td className="col-md-1">{order.orderId}</td>
                <td className="col-md-1">{order.address.name}</td>
                <td className="col-md-1">{order.address.phone}</td>
                <td className="col-md-1">{order.usedPromoCode}</td>
                <td className="col-md-1">${order.totalCost.toFixed(2)}</td>
                <td className="col-md-2">{convertDatetime(order.date.toLocaleString())}</td>
                <td className="col-md-1">
                    {order.verified && <span className="badge rounded-pill bg-success">verified</span>}
                    {/* <span className="badge rounded-pill bg-success">verified</span>
                    {order.modified ?  <span className="badge rounded-pill bg-warning">modified</span> : null} */}
                </td>
                <td className="col-md-1">
                    <div class="d-flex justify-content-between">
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={(e) => verifyRecord(e, order._id)}
                        > <FaCheck />
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {}}
                        > <FaTelegramPlane  />
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={(e) => {deleteRecord(e, order._id)}}
                        > <FaTrashAlt  />
                        </button>
                    </div>

                    
                </td>
            </tr>
     );
}
 
export default Order;
import { useHistory } from "react-router-dom";
import { FaCheck, FaTelegramPlane, FaPencilAlt, FaUndo, FaTrashAlt } from "react-icons/fa";
import './index.css'

const Order = ({order, deleteRecord, verifyRecord}) => { 
    const history = useHistory();
    
    const handleRowClick = () => {
      history.push(`/invoice/${order.orderId}`);
    }
    
    const convertDatetime = (dt) => {
        const d = new Date(dt)
        return d.toLocaleString()
    }

    const editRecord = (e) => {
        e.stopPropagation();
        history.push(`/record/${order._id}`); 
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
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={(e) => verifyRecord(e, order._id)}
                        > <FaCheck />
                        </button>
                        <button
                            type="button"
                            className="btn btn-warning"
                            onClick={editRecord}
                        > <FaPencilAlt  />
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={(e) => {deleteRecord(e, order._id)}}
                        > <FaTrashAlt  />
                        </button>
                </td>
            </tr>
     );
}
 
export default Order;
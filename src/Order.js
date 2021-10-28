import { useHistory } from "react-router-dom";
import { FaCheck, FaTelegramPlane, FaTimes, FaUndo, FaTrashAlt } from "react-icons/fa";

const Order = ({order, key}) => { 
    const history = useHistory();
    
    const handleRowClick = () => {
      history.push(`/invoice/${key}`);
    }
    
    const convertDatetime = (dt) => {
        const d = new Date(dt)
        return d.toLocaleString()
    }

    const verifyRecord = (e) => {
        e.stopPropagation();
        var answer = window.confirm("Would you like to verify record?");
        if (answer) {
            
        }
    }
    return (
            <tr onClick={handleRowClick}>
                <td className="col-md-1">{order.orderId}</td>
                <td className="col-md-2">{order.address.name}</td>
                <td className="col-md-1">{order.address.phone}</td>
                <td className="col-md-1">{order.usedPromoCode}</td>
                <td className="col-md-1">${order.totalCost.toFixed(2)}</td>
                <td className="col-md-2">{convertDatetime(order.date.toLocaleString())}</td>
                <td className="col-md-1">
                    <span class="badge rounded-pill bg-success">verified</span>
                    {order.modified ?  <span class="badge rounded-pill bg-warning">modified</span> : <div/>}
                </td>
                <td className="col-md-2">
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={(e) => verifyRecord(e)}
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
                        onClick={() => {}}
                    > <FaTrashAlt  />
                    </button>
                </td>
            </tr>
     );
}
 
export default Order;
import { useHistory } from "react-router-dom";
import { FaCheck, FaTelegramPlane, FaTimes, FaUndo, FaTrashAlt } from "react-icons/fa";

const Order = ({order, key}) => { 
    const history = useHistory();
    const handleRowClick = () => {
      history.push(`/invoice/${key}`);
    }  
    return (
            <tr onClick={() => handleRowClick()}>
                <td className="col-md-2">{order.orderId}</td>
                <td className="col-md-2">{order.address.name}</td>
                <td className="col-md-2">{order.address.phone}</td>
                <td className="col-md-2">{order.usedPromoCode}</td>
                <td className="col-md-2">${order.totalCost.toFixed(2)}</td>
                <td className="col-md-2">
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {}}
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
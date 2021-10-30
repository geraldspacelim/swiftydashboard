import "./index.css";
import { useState, useEffect } from "react";
import { FaMinus } from "react-icons/fa";

const Item = ({ item , xkey, todel }) => {
  const [itemName, setItemName] = useState("");
  const [itemQty, setItemQty] = useState("");

  return (
    <div className="row">
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          required
          value={item.name}
          onChange={(e) => setItemName(e.target.value)}
        />
      </div>
      <div className="col-md-1">
        <input
          type="text"
          className="form-control"
          required
          value={item.quantity}
          onChange={(e) => setItemQty(e.target.value)}
        />
      </div>
      <div className="col-md-2">
        <button
          type="button"
          className="btn btn-danger"
          onClick={(e) => {todel(xkey)}}
        >
          {" "}
          <FaMinus />
        </button>
      </div>
    </div>
  );
};

export default Item;

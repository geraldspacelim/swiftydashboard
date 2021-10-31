import "./index.css";
import { useState, useEffect } from "react";
import { FaMinus } from "react-icons/fa";

const Item = ({ item, idx, todel, products, updateOrder }) => {

  console.log(item.name)
  return (
    <div className="row">
      <div className="col-md-6">
      <select
          className="form-control"
          id="exampleFormControlSelect1"
          value={item.name}
          onChange={(e) => {
            updateOrder(idx, {id: item.id, size: "", quantity: item.quantity, name: e.target.value})
          }}
        > 
        {products.map(product => <option>{product.name}</option>)}
        </select>
      </div>
      <div className="col-md-1">
        <input
          type="text"
          className="form-control"
          required
          value={item.quantity}
          onChange={(e) => {
            updateOrder(idx, {id: item.id, size: "", quantity: e.target.value, name: item.name})
          }}
        />
      </div>
      <div className="col-md-2">
        <button
          type="button"
          className="btn btn-danger"
          onClick={(e) => {todel(idx)}}
        >
          <FaMinus />
        </button>
      </div>
    </div>
  );
};

export default Item;

import "./index.css";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Item from "./Item";
const axios = require("axios");

const Record = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState(null)
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [hall, setHall] = useState("");
  const [totalCost, setTotalCost] =  useState(0)

  useEffect(() => {
    axios
      .get("https://swiftys-server.glitch.me/api/orders/order/" + id)
      .then((res) => {
        setOrder(res.data);     
        setTotalCost(res.data.totalCost)   
        axios
          .get("https://swiftys-server.glitch.me/api/shop/all")
          .then((res) => {
            setProducts(res.data[1].products)
            setIsLoading(false)
          }).catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const todel = (i) => {
    const remainingCart = order.cart.filter((el, idx) => {
      return i !== idx;
    });
    setOrder({ ...order, cart: remainingCart });
  };

  const updateOrder = (i, newCart) => {
    console.log(newCart)
    let tempCart = [...order.cart]
    tempCart[i] = newCart
    setOrder({
      ...order,
      cart: tempCart,
    });
  }


  const addNewProduct = () => {
    const initId = 1
    const tempCart = {
      id: initId,
      size: "",
      quantity: 1,
      name: products[initId - 1].name,
    };
    order.cart.push(tempCart);
    setOrder({
      ...order,
      cart: order.cart,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="edit">
      {isLoading && <div>Loading...</div>}
      {(order && products) && (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name: </label>
              <input
                type="text"
                required
                className="form-control"
                value={order.address.name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Contact: </label>
              <input
                type="text"
                required
                className="form-control"
                value={order.address.phone}
                onChange={(e) => setContact(e.target.value)}
              />
              <label>Email: </label>
              <input
                type="text"
                required
                className="form-control"
                value={order.address.email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Hall: </label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                value={order.hall}
                onChange={(e) => setHall(e.target.value)}
              >
                <option>Hall 4</option>
                <option>Hall 5</option>
                <option>Hall 6</option>
              </select>
              <br />
              <label>Total Cost</label>
              <input
                type="text"
                className="form-control classname"
                value={`$${totalCost}`}
                readOnly
              />
              <br />
              {order.cart.map((item, index) => {
                return (
                  <Item item={item} key={index} idx={index} todel={todel} products={products} updateOrder={updateOrder}/>
                );
              })}
            </div>
            <br />
            <div className="form-group">
            <button type="button" className="btn btn-primary"
                onClick={addNewProduct}
                value="Add Product"
                className="btn btn-primary"
            > Add Product
            </button>
              <input
                type="submit"
                onClick={handleSubmit}
                value="Update"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Record;

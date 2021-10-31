import "./index.css";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Item from "./Item";
const axios = require("axios");

const Record = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [hall, setHall] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("https://swiftys-server.glitch.me/api/orders/order/" + id)
      .then((res) => {
        setOrder(res.data);
        setIsLoading(false);
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

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // handle click event of the Add button
  const addProductBox = () => {
    const tempCart = {
      id: randomInteger(999999, 99999999999),
      size: "",
      quantity: 1,
      price: null,
      name: "",
    };
    order.cart.push(tempCart);
    setOrder({
      ...order,
      cart: order.cart,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(order.cart);
    // const blog = {title, body, author}
    // console.log(blog)
    // setIsLoading(true)
    // fetch('http://localhost:8000/blogs', {
    //     method: 'POST',
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify(blog)
    // }).then(() => {
    //     console.log("new blog added")
    //     setIsLoading(false);
    //     history.push('/');
    // })
  };

  return (
    <div className="edit">
      {isLoading && <div>Loading...</div>}
      {order && (
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
                value={order.totalCost}
                readOnly
              />
              <br />
              {order.cart.map((item, xkey) => {
                return (
                  <Item item={item} key={item.id} xkey={xkey} todel={todel} />
                );
              })}
            </div>
            <br />
            <div className="form-group">
              <input
                onClick={addProductBox}
                type="submit"
                value="Add Product"
                className="btn btn-primary"
              />
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

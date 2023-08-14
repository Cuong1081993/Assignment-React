import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGift,
  faLeftLong,
  faRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  // lấy ra list cart trong cartslice
  const cartItems = useSelector((state) => state.cart.listCart);
  // tính tổng total price

  const reduceTotalPrice = cartItems.reduce((cur, prev) => {
    return cur + prev.totalPrice;
  }, 0);

  return (
    <>
      <section className={classes.banner}>
        <p>SHOP</p>
        <p>Shop</p>
      </section>
      <div>
        <p className={classes.title_content}>Shopping Cart</p>
      </div>
      <div className={classes.cart}>
        <div>
          <table className="table" style={{ marginTop: "1rem" }}>
            <thead className="bg-light">
              <tr className="text-center">
                <th className="border-0" scope="col">
                  {" "}
                  <p className="text-small text-uppercase">Image</p>
                </th>
                <th className="border-0" scope="col">
                  {" "}
                  <p className="text-small text-uppercase">Product</p>
                </th>
                <th className="border-0" scope="col">
                  {" "}
                  <p className="text-small text-uppercase">Price</p>
                </th>
                <th className="border-0" scope="col">
                  {" "}
                  <p className="text-small text-uppercase">Quantity</p>
                </th>
                <th className="border-0" scope="col">
                  {" "}
                  <p className="text-small text-uppercase">Total</p>
                </th>
                <th className="border-0" scope="col">
                  {" "}
                  <p className="text-small text-uppercase">Remove</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={{
                    id: item.id,
                    img: item.img,
                    name: item.name,
                    totalPrice: item.totalPrice,
                    price: item.price,
                    quantity: item.quantity,
                  }}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className={classes.cart_total}>
          <p style={{fontStyle:"italic"}}>CART TOTAL</p>
          <div className={classes.sub_total}>
            <span>SUB TOTAL</span>
            <span>{parseInt(reduceTotalPrice).toLocaleString()}VND</span>
          </div>
          <div className={classes.total}>
            <span>TOTAL</span>
            <span>{parseInt(reduceTotalPrice).toLocaleString()}VND</span>
          </div>
          <input placeholder="Enter your coupon" />
          <button>
            <FontAwesomeIcon icon={faGift} />
            <span>Apply coupon</span>
          </button>
        </div>
        <div className={classes.move_page}>
          <p>
            <Link to="/shop">
              <FontAwesomeIcon icon={faLeftLong} />
              <span style={{ marginLeft: "7px" }}>Continue Shopping</span>
            </Link>
          </p>
          <p>
            <Link to="/checkout">
              <span style={{ marginRight: "7px" }}>Procced to Checkout</span>
              <FontAwesomeIcon icon={faRightLong} />
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default Cart;

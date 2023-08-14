import { useSelector } from "react-redux";
import classes from './Order.module.css'
const Order = () => {
  const itemsData = useSelector((state) => state.cart.listCart);
  const totalPrice = itemsData.reduce((cur,prev)=>{
    return cur + prev.totalPrice;
  },0)
  return (
    <div className={classes.order}>
      <h3>Your Order</h3>
      {itemsData.map((item) => (
        <section key={item.id}>
          <p>
            <span>{item.name}</span>
            <span>{parseInt(item.totalPrice).toLocaleString()}/VNĐ</span> X
            {item.quantity}
          </p>
        </section>
      ))}
      <div className={classes.total}>
        <strong>TOTAL: </strong>
        <span>{parseInt(totalPrice).toLocaleString()}/VNĐ</span>
      </div>
    </div>
  );
};
export default Order;

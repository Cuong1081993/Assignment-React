import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { cartAction } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const item = props.item;

  const removeHandler = (item) => {
    dispatch(cartAction.REMOVE_CART(item.id));
  };
  const addHandler = () => {
    dispatch(
      cartAction.ADD_CART({
        id: item.id,
        name: item.name,
        price: item.price,
      })
    );
  };
  
  const deleteHandler = () => {
    const text = `Are you sure to delete ${item.name} ?`;
    if (window.confirm(text) === true) {
      dispatch(cartAction.DELETE_CART(item.id));
    } else {
      return;
    }
  };
  return (
    <>
      <tr className="text-center" key={item.id}>
        <td className="pl-0 border-0">
          <div className=" align-items-center justify-content-center">
            <img src={item.img} alt="..." width="70" />
          </div>
        </td>
        <td className="align-middle border-0">
          <div className=" align-items-center justify-content-center">
            {item.name}
          </div>
        </td>

        <td className="align-middle border-0">
          <p className="mb-0 small">
            {parseInt(item.price).toLocaleString()}/VNĐ
          </p>
        </td>
        <td className="align-middle border-0">
          <div className="quantity justify-content-center">
            <FontAwesomeIcon
              icon={faCaretLeft}
              className={classes.btn_remove}
              onClick={() => removeHandler(item)}
            />
            <span style={{ margin: "0 3px" }}>{item.quantity}</span>
            <FontAwesomeIcon
              icon={faCaretRight}
              className={classes.btn_add}
              onClick={() => addHandler(item)}
            />
          </div>
        </td>
        <td className="align-middle border-0">
          <p className="mb-0 small">
            {parseInt(item.totalPrice).toLocaleString()}/VNĐ
          </p>
        </td>
        <td className="align-middle border-0">
          <FontAwesomeIcon
            role="button"
            icon={faTrash}
            className={classes.icon_remove}
            onClick={() => deleteHandler(item)}
          />
        </td>
      </tr>
    </>
  );
};
export default CartItem;

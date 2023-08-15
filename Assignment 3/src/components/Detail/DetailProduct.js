import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./DetailProduct.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { getFromStorage, saveToStorage } from "../storage";
import { cartAction } from "../../store/cart-slice";

const DetailProduct = () => {
  
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [data, setData] = useState([]);

  const idProduct = params.productId;
  const detail = data.filter((item) => item._id.$oid === idProduct);


  const relatedProduct = data.filter(
    (item) => item.category === detail[0].category
  );

  const addItemHandler = (item) => {
   
    dispatch(
      cartAction.ADD_CART({
        id: item._id.$oid,
        name: item.name,
        price: parseInt(item.price),
        img1: item.img1,
        quantity: quantity,
      })
    );
    const products = getFromStorage("PRODUCT_ARRAY") ?? [];
    const idProduct = products.find(
      (productArray) => productArray.name === item.name
    );
    if (!idProduct) {
      products.push({
        id: item._id.$oid,
        name: item.name,
        price: parseInt(item.price),
        img1: item.img1,
        quantity: quantity,
        totalPrice: quantity * item.price,
      });
      saveToStorage("PRODUCT_ARRAY", products);
      navigation("/shop");
    } else {
      navigation("/shop");
    }
  };
  const handlerAdd = () => {
    setQuantity(quantity + 1);
  };
  const handlerRemove = () => {
    setQuantity(quantity - 1);
    if (parseInt(quantity === 1)) {
      return setQuantity(1);
    }
  };

  useEffect(() => {
    const fetchApiProduct = async () => {
      const response = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
      );
      let data = await response.json(response);
      setData(data);
    };
    fetchApiProduct();
  }, [data]);

  return (
    <>
      {detail.map((item, id) => (
        <div className={classes.container} key={id}>
          <div className={classes.left_img}>
            <div className={classes.left_img_list}>
              <img src={item.img1} alt="img1" />
              <img src={item.img2} alt="img2" />
              <img src={item.img3} alt="img3" />
              <img src={item.img4} alt="img4" />
            </div>
            <img src={item.img1} alt="img1" className={classes.img_main} />
          </div>
          <div className={classes.right_container}>
            <p>{item.name}</p>
            <p>{parseInt(item.price).toLocaleString()}VND</p>
            <p>
              <strong>CATEGORY:</strong>
              {item.category}
            </p>
            <div className={classes.quantity}>
              <div className={classes.quantity_container}>
                <span>QUANTITY</span>
                <div className={classes.actions}>
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    className={classes.btn_remove}
                    onClick={handlerRemove}
                  />
                  <span>{quantity}</span>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className={classes.btn_add}
                    onClick={handlerAdd}
                  />
                </div>
              </div>
              <button
                className={classes.btn_submit}
                onClick={() => addItemHandler(item)}
              >
                Add to cart
              </button>
            </div>
          </div>
          <div style={{ marginTop: "70px" }}>
            <span className={classes.descrip}>Description</span>
            <p className={classes.pro_descrip}>Product description</p>
            <p>{item.long_desc}</p>
          </div>
        </div>
      ))}
      <p className={classes.title}>Related Producst</p>
      <div className={classes.description}>
        {relatedProduct.map((item, id) => (
          <div className={classes.related} key={id}>
            <img src={item.img1} alt="img" />
            <div className={classes.img_related}>
              <p>{item.name}</p>
              <p>{parseInt(item.price).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default DetailProduct;

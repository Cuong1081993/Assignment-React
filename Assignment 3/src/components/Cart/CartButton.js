import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import classes from './CartButton.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from 'react-redux';

import {
    cartAction
} from '../../store/cart-slice'
import { useEffect } from 'react';

const CartButton = ()=>{
    const dispatch = useDispatch();

    const cartQuantity = useSelector((state) => state.cart.totalQuantity)

    useEffect(() => {
        const action = cartAction.LOAD_TOTAL_QUANTITY();
        dispatch(action);
    }, [cartQuantity])

return(
    <>
        <FontAwesomeIcon icon={faCartShopping} className={classes.icon}/>
        <span>Cart</span>
        <span className={classes.badge}>
            {cartQuantity}
        </span>
    </>
)
}
export default CartButton;
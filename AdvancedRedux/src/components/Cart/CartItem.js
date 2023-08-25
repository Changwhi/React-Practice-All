import classes from './CartItem.module.css';
import { cartAction } from '../../Store/cart';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
  const {itemId, title, quantity,totalAmount, price } = props.item;
    const dispatch = useDispatch();
    const incrementHandler = () => {
        dispatch(cartAction.increment(itemId));
    };

    const decrementHandler = () => {
        dispatch(cartAction.decrement(itemId));
    };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalAmount.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrementHandler}>-</button>
          <button onClick={incrementHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartAction } from '../../Store/cart';
import { useDispatch } from 'react-redux';

const ProductItem = (props) => {
  const { itemId, title, price, description } = props;
  const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(cartAction.addToCart({
            price: price,
            itemId: itemId,
            quantity: 1,
            title: title,
            content: description
        }))
    };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

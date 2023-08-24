import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../Store/cart';

const CartButton = (props) => {
    const dispatch = useDispatch();
    const cartToggleHandler = () => {
        dispatch(cartAction.toggle())
    };

    return (
        <button onClick={cartToggleHandler} className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>1</span>
        </button>
    );
};

export default CartButton;

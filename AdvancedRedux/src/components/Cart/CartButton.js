import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../Store/cart';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const CartButton = (props) => {
    const [quantity, setQuantity] = useState(0);

    const items = useSelector(state => state.cart.items);

    useEffect(() => {
        setQuantity(0);
        items.map(item => setQuantity(prev => { return prev + item.quantity }))
    }, [items])

    const dispatch = useDispatch();
    const cartToggleHandler = () => {
        dispatch(cartAction.toggle())
    };

    return (
        <button onClick={cartToggleHandler} className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>{quantity}</span>
        </button>
    );
};

export default CartButton;

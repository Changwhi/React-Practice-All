import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { sendCartData, initialCartData } from './Store/Cart-action';

let initSendRequest = false

function App() {
    const dispatch = useDispatch();
    const isExpanded = useSelector(state => state.cart.isExpanded)
    const cart = useSelector(state => state.cart.items)
    const notification = useSelector(state => state.cart.notification)
    const changed = useSelector(state => state.cart.changed)
    useEffect(() => {
        dispatch(initialCartData());

    }, [dispatch])

    useEffect(() => {
        if (!initSendRequest) {
            initSendRequest = true
            return
        }
        if (changed) {
        dispatch(sendCartData(cart));
        };
    }, [cart, dispatch]);

    return <>
        {notification && <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
            />}
        <Layout>
            {isExpanded && <Cart />}
            <Products />
        </Layout>
    </>;
}

export default App;

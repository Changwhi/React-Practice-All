import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { cartAction } from './Store/cart';
import Notification from './components/UI/Notification';

let initSendRequest = false

function App() {
    const dispatch = useDispatch();
    const isExpanded = useSelector(state => state.cart.isExpanded)
    const cart = useSelector(state => state.cart.items)
    const notification = useSelector(state => state.cart.notification)

    useEffect(() => {
        if (!initSendRequest) {
            initSendRequest = true
            return
        }

        dispatch(cartAction.notification({
            status: 'Pending',
            title: 'sending',
            message: 'Seding reqeust...'
        }));

        const sendCartData = async () => {
            const response = await fetch('https://react-food-ordering-ff3f4-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(cart)
                })

            if (!response.ok) {
                throw new Error("sending request failed")
            }
            //const responseData = await response.json();

            dispatch(cartAction.notification({
                status: 'success',
                title: 'Suceess',
                message: 'Sent a data successfully'
            }))
        };
        sendCartData().catch(err => {
            dispatch(cartAction.notification({
                status: 'error',
                title: 'Error',
                message: 'Sending a data failed'
            }))});
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

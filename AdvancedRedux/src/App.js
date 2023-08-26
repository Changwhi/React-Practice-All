import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


function App() {
    const isExpanded = useSelector(state => state.cart.isExpanded)
    const cart = useSelector(state => state.cart.items)

    useEffect(() => {
        const sendCartData = async () => {
            const response = await fetch('https://react-food-ordering-ff3f4-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(cart)
                })
            const responseData = await response.json();
            console.log(responseData)

        };

        sendCartData();
    }, [cart]);


    return (
        <Layout>
            {isExpanded && <Cart />}
            <Products />
        </Layout>
    );
}

export default App;

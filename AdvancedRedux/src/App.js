import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';


function App() {
    const isExpanded = useSelector(state => state.cart.isExpanded)
  return (
    <Layout>
      {isExpanded && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

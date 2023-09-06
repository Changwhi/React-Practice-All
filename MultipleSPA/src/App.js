import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './pages/Main';
import Product from './pages/Product';
import Roots from './pages/Roots';
import Error from './pages/Error';
import ProductDetail from './pages/ProductDeatil';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Roots />,
        errorElement: <Error />,
        children: [
            {path: '/', element:<Main />},
            {path: '/product', element:<Product />},
            {path: '/product/:productId', element: <ProductDetail />}
        ]
    },
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;

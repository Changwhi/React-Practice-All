import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './pages/Main';
import Product from './pages/Product';
import Roots from './pages/Roots';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Roots />,
        children: [
            {path: '/', element:<Main />},
            {path: '/product', element:<Product />},
        ]
    },
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;

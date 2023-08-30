import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Components/Main';
import Product from './Components/Product';

const router = createBrowserRouter([
    {path: '/', element:<Main />},
    {path: '/product', element:<Product />},
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;

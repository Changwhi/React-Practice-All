import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Components/Main';

const router = createBrowserRouter([
    {path: '/', element:<Main />}

]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;

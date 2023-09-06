import { Link } from "react-router-dom";

const DUMMY = [
    {productId: 1, productName: 'product1'},
    {productId: 2, productName: 'product2'},
    {productId: 3, productName: 'product3'},
]


const Product = () => {

    return <>
        <h2>Product page</h2>
        <ul>
        {DUMMY.map((product) =>
            <li><Link to={`/product/${product.productId}`}>{product.productName}</Link></li>
            )}
        </ul>
        </>
};


export default Product;

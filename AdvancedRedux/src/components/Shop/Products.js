import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY = [{
    itemId: 1,
    title: 'Test1',
    price: 6,
    description: 'This is a first product - amazing!'
},
{
    itemId: 2,
    title: 'Test2',
    price: 2,
    description: 'This is a second product - amazing!'
}]
const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY.map(book => {
                    return <ProductItem
                        key={book.itemId}
                        itemId={book.itemId}
                        title={book.title}
                        price={book.price}
                        description={book.description}
                    />
                })}
            </ul>
        </section>
    );
};

export default Products;

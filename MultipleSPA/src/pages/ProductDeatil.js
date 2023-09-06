import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const params = useParams();

    return <>
        <main>
            <p> Product detail page </p>
            {params.productId}
        </main>
    </>
};

export default ProductDetail

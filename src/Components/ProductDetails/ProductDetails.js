
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const params = useParams();
    console.log(params);
  return <h2>Products Details {params.productId}</h2>
};

export default ProductDetails;
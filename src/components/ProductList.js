import { data } from '../data';
import { Link } from 'react-router-dom';
export const ProductList = ({setSelectedProduct}) => {
    const handleProductSelect = (productId) => {
        setSelectedProduct(productId);
		console.log('ID del producto seleccionado:', handleProductSelect);
		
    };
	return (
		<div className="container">
			<br/>
			<div className='container-items'>
			{data.map(product => (
				<div className='item' key={product.id}>
					<figure>
						<img src={product.image} alt={product.title} />
					</figure>
					<div className='info-product'>
						<h2>{product.title}</h2>
						<br/>
                        <p className='description'>{product.description}</p>
						<Link to={`/product/${product.id}`}>
						<button onClick={() => handleProductSelect(product.id)}>Ver detalles</button>
						</Link>
					</div>
				</div>
			))}
		</div>
		<br/>
		</div>
	);
};

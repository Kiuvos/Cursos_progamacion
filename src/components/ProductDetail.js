import { data } from '../data';

export const ProductDetail = ({ selectedProductId }) => {
    // Busca el producto que coincida con el ID seleccionado
    const product = data.find(product => product.id === selectedProductId);

    if (!product) {
        return <div>No se encontró el producto</div>;
    }

    return (
        <div className="container">
            <br />
            <div className='container-items'>
                <div className='item' key={product.id}>
                    <figure>
                        <img src={product.image} alt={product.title} />
                    </figure>
                    <div className='info-product'>
                        <h2>{product.title}</h2>
                        <p className='price'>${product.price}</p>
                        <p className='instructor'>Instructor: {product.instructor}</p>
                        <p className='level'>Nivel: {product.level}</p>
                        <p className='description'>{product.description}</p>
                        <p className='duration'>Duracion: {product.duration}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

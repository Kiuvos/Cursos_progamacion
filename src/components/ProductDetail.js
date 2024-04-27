import { data } from '../data';

export const ProductDetail = ({ selectedProductId }) => {
    // Busca el producto que coincida con el ID seleccionado
    const product = data.find(product => product.id === selectedProductId);

    if (!product) {
        return <div>No se encontró el producto</div>;
    }

    return (
        <div>
            <br />
            <div className='container'>
                <div className='item-detail' key={product.id}>
                    <figure>
                    <div className="imagen-detail">
                        <img src={product.image} alt={product.title} />
                        </div>
                    </figure>
                    <div className='container-detail'>
                        <h2>{product.title}</h2>
                        <p className='price'>Precio: ${product.price}</p>
                        <p className='instructor'>Instructor: {product.instructor}</p>
                        <p className='level'>Nivel: {product.level}</p>
                        <p className='description-detail'>{product.description}</p>
                        <p className='duration'>Duracion: {product.duration}</p>
                        <p>Trailer del curso: </p>
                        <figure>
                            <div className="video">
                            <img src="https://2.bp.blogspot.com/-lt0MEEEl-T0/VMu2KGKPi2I/AAAAAAAAAqc/b2MgcM-0IVE/s1600/t00tc7.gif" />
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

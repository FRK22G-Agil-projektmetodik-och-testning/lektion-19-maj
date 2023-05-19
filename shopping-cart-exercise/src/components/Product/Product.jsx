import './Product.css';

function Product(props) {
    const { product } = props;

    return (
        <article className='product'>
            <h2>{ product.title }</h2>
            <h3>{ product.author }</h3>
            <p>{ product.text }</p>
            <p>Pris: { product.price } kr</p>
            <button onClick={ () => { props.addToCart(product) } }>Add to cart</button>
        </article>
    )
}

export default Product;
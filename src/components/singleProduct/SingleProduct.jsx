import './SingleProduct.css';
const SingleProduct = ({ product }) => {

    const { category, description, id, image_url, name, price, rating, stock } = product;
    // console.log(product);

    return (
        <div className='card'>
            <img className='img' src={image_url} alt="" />
            <p>ID : {id}</p>
            <p>Category : {category}</p>
            <p>Name : {name}</p>
            <p>Price : {price}</p>
            <p>Rating : {rating}</p>
            <p>Stock : {stock}</p>
            <div>
                <p>Description : {description}</p>
            </div>
            <br />
            <div  className='p-2 cursor-pointer rounded-3xl text-amber-50 bg-cyan-500'>
                <button>Add To Cart</button>
            </div>
        </div>

    );
};

export default SingleProduct;
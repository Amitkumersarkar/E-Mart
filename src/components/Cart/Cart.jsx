
const Cart = ({ selectedProduct }) => {
    // console.log(selectedProduct);
    return (
        <div>
            {
                selectedProduct.map((product) => (

                    <div>
                        <div className="flex gap-4">
                            <img className="w-18" src={product.image_url} alt="" />
                            <p>Name : {product.name} </p>
                            <p>Price : {product.price} </p>
                            {/* <button className="btn">Remove Item</button> */}
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Cart;
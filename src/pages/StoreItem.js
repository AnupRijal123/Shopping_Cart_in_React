import formatCurrency from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { useParams } from 'react-router-dom';
import Items from '../data/items.json';
import '../styles/StoreItem.css';
import TrendingNow from '../components/TrendingNow';
import { useEffect } from 'react';
function StoreItem() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { id } = useParams();
    const itemID = parseInt(id);
    console.log(Items);

    // const [isFound, setIsFound] = useState(false);
    // console.log(isFound);
    // useEffect(() => {
    //     setIsFound(Items.find((item => item.id === itemID)));
    // }, [Items]);





    const { getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
    } = useShoppingCart();
    const quantity = getItemQuantity(itemID);
    const storeItem = Items.find((item) => item.id === itemID)
    console.log(storeItem)
    return (
        // <div>
        //     <h2>Store Item component</h2>
        //     <img src={imgUrl} width="200px" height="200px" />
        //     <p>{name}</p>
        //     <p>{formatCurrency(price)}</p>
        //     <div>
        //         {quantity === 0 ? (
        //             <button onClick={() => increaseCartQuantity(id)}>+Add To Cart</button>
        //         ) : (
        //             <div>
        //                 <button onClick={() => decreaseCartQuantity(id)}>-</button>
        //                 <p>{quantity} in Cart</p>
        //                 <button onClick={() => increaseCartQuantity(id)}>+</button>
        //                 <button onClick={() => removeFromCart(id)}>Remove</button>
        //             </div>
        //         )}
        //     </div>
        // </div>
        <div>
            <div className="product-container d-flex">
                <div className="product-heading-div d-flex">
                    <h3>{storeItem.name}</h3>
                </div>
                <div className="product-row d-flex g-10">
                    <div className="product-column">
                        {storeItem.imgUrl}
                        <img src={storeItem.imgUrl} height="100px" width="100px" />
                    </div>
                    <div className="product-column desription-div">
                        <div className="product-text-div">
                            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaadasa asd  asd a s a sdasdasd asasda</p>
                        </div>
                        <div className="d-flex quantity-div align-center">
                            <h4>Quantity</h4>
                            <div>
                                <button className="button white-button quantity-button"
                                    onClick={() => decreaseCartQuantity(storeItem.id)}
                                >-
                                </button>
                                <button className="button white-button quantity-button">{quantity}</button>
                                <button className="button white-button quantity-button"
                                    onClick={() => increaseCartQuantity(storeItem.id)}>+</button>
                            </div>
                            <h4>{formatCurrency(storeItem.price)}</h4>
                        </div>
                        <div className="button-div d-flex g-10">
                            <button style={{ backgroundColor: 'transparent' }} className=" button white-button"
                                onClick={() => increaseCartQuantity(storeItem.id)}>add to cart</button>
                            <button className="button red-button">Buy now</button>
                        </div>
                    </div>
                </div>

                <div className="images-div d-flex g-5">
                    <div className="single-image-div">a</div>
                    <div className="single-image-div">b</div>
                    <div className="single-image-div">c</div>
                </div>

                <div className="d-flex g-10">
                    <div className="product-info-div">
                        <h4>Texture:</h4>
                        <h4 className="font-10">Plastic</h4>
                    </div>
                    <div className="product-info-div">
                        <h4>Weight:</h4>
                        <h4 className="font-10">3.5kg</h4>
                    </div>
                    <div className="product-info-div">
                        <h4>Size:</h4>
                        <h4 className="font-10">20cmx10cm</h4>
                    </div>
                </div>

                <TrendingNow />
            </div>

            {/* {isFound === false && <h3>Sorry there is no items</h3>} */}
        </div >
    )
}


export default StoreItem;
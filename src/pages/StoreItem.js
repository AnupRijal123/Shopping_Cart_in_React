import formatCurrency from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';
import '../styles/StoreItem.css';
import TrendingNow from '../components/TrendingNow';
import LeftArrow from '../icons/left-arrow.svg';
import { useEffect, useState } from 'react';
function StoreItem({ item, handleclearItem }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const storeItem = item;

    const { getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
    } = useShoppingCart();
    const quantity = getItemQuantity(storeItem.id);

    const [imageURL, setImageURL] = useState(storeItem.imgUrl);

    const changeImage = (url) => {
        setImageURL(url);
    }


    return (

        <div>
            <div className="product-container d-flex">
                <div className="product-heading-div d-flex">
                    <div onClick={() => handleclearItem({})} className="back-button-div d-flex g-5 align-center cursor-pointer">
                        <img src={LeftArrow} width="20px" height="20px" />
                        <h4 className="font-10">BACK TO PRODUCTS</h4>
                    </div>
                    <h3>{storeItem.name}</h3>
                </div>
                <div className="product-row d-flex g-10">
                    <div className="product-column">
                        <img src={imageURL} height="100%" width="100%" />
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
                    <div className="single-image-div">
                        <img onClick={() => changeImage(storeItem.imgUrl)} src={storeItem.imgUrl} width="100%" height="100%" />
                    </div>
                    {storeItem.imgUrl1 &&
                        <div className="single-image-div">
                            <img onClick={() => changeImage(storeItem.imgUrl1)} src={storeItem.imgUrl1} width="100%" height="100%" />
                        </div>
                    }
                    {storeItem.imgUrl2 &&
                        <div className="single-image-div">
                            <img onClick={() => changeImage(storeItem.imgUrl2)} src={storeItem.imgUrl2} width="100%" height="100%" />
                        </div>
                    }
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

        </div>
    )
}


export default StoreItem;
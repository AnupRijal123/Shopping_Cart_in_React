import '../styles/Home.css';
import storeItems from '../data/items.json';
import formatCurrency from '../utilities/formatCurrency';
import wallDecoration1 from '../UI-Images/wallDecoration1.jpg';
import TrendingNow from '../components/TrendingNow';
import household from '../UI-Images/household.jpeg';
import skincare from '../UI-Images/skincare.jpeg';
import kitchen from '../UI-Images/kitchen.jpg';
import gadgets from '../UI-Images/gadgets.jpeg';

import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    const mostSoldItems = storeItems.filter((item) =>
        item.id === 3 ||
        item.id === 8 ||
        item.id === 1 ||
        item.id === 5 ||
        item.id === 6 ||
        item.id === 11 ||
        item.id === 2
    )
    return (
        <div className="home-page-container d-flex">
            <div className="d-flex g-10">
                <div className="column image-text-div background-gray">
                    <img src={household} alt="houseimage" className="left-to-right" width="100%" height="100%" />
                    <h2 className="text-inside-image">Decor</h2>
                </div>
                <div className="column d-flex g-10 ">
                    <div className="inner-column image-text-div background-gray">
                        <img src={skincare} alt="skincareimage" className="top-to-bottom" width="100%" height="100%" />
                        <h2 className="text-inside-image">Skincare</h2>
                    </div>
                    <div className="inner-column d-flex g-10">
                        <div className="inner-row image-text-div background-gray">
                            <img src={kitchen} alt="kitchenimage" className="right-to-left" width="100%" height="100%" />
                            <h2 className="text-inside-image">Kitchen</h2>
                        </div>
                        <div className="inner-row image-text-div background-gray">
                            <img src={gadgets} alt="gadgetimage" className="bottom-to-top" width="100%" height="100%" />
                            <h2 className="text-inside-image">Gadgets</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h4>Products we are proud of</h4>
                <div className="grid-container g-10">

                    {mostSoldItems.map((item) => (
                        <div onClick={() => { navigate('/store') }} className="card" key={item.id}>
                            <div className="image-div">
                                <img src={item.imgUrl} alt="item" width="100%" height="100%" />
                            </div>
                            <div className="image-info-div">
                                <p>{item.name}</p>
                                <h4>{formatCurrency(item.price)}</h4>
                            </div>

                        </div>

                    ))}

                </div>
            </div>

            <div className="shop-now-container d-flex">
                <div className='text-div d-flex'>
                    <h4>Create harmonous living</h4>
                    <p>Our producrs are all made to standaed sizes
                        so that you can mix and match them freely
                    </p>
                    <button className="button button-width"
                        onClick={() => navigate('/store')}
                    >shop now</button>
                </div>

                <div className='image-div'>
                    <img src={wallDecoration1} alt="wall" width="100%" height="250px" />
                </div>
            </div>

            <TrendingNow />

            <div className="shop-now-container d-flex">
                <div className='image-div'>
                    <img src={wallDecoration1} alt="wall" width="100%" height="250px" />
                </div>

                <div className='text-div d-flex'>
                    <h4>Create harmonous living</h4>
                    <p>Our producrs are all made to standaed sizes
                        so that you can mix and match them freely
                    </p>
                    <button className="button button-width"
                        onClick={() => navigate('/store')}
                    >shop now</button>
                </div>


            </div>

        </div>
    )
}
export default Home;
import '../styles/Home.css';
import storeItems from '../data/items.json';
import formatCurrency from '../utilities/formatCurrency';
import testImage from '../UI-Images/Bohemian-1024x780.webp';
import TrendingNow from '../components/TrendingNow';
import { useNavigate } from 'react-router-dom';
function Home() {
    const items = storeItems;
    const navigate = useNavigate();
    console.log(items)
    return (
        <div className="home-page-container d-flex">
            <div className="d-flex g-10">
                <div className="column">1</div>
                <div className="column d-flex g-10 ">
                    <div className="inner-column">a</div>
                    <div className="inner-column d-flex g-10">
                        <div className="inner-row">x</div>
                        <div className="inner-row">y</div>
                    </div>
                </div>
            </div>

            <div>
                <h4>Products we are proud of</h4>
                <div className="grid-container g-10">

                    {items.map((item) => (
                        <div className="card" key={item.id}
                            onClick={() => navigate(`/store/${item.id}`)}>
                            <div className="image-div">
                                <img src={item.imgUrl} width="100%" height="100%" />
                            </div>
                            <div className="image-info-div">
                                <p>{item.name}</p>
                                <h4>{formatCurrency(item.price)}</h4>
                            </div>

                        </div>

                    ))}

                </div>
            </div>

            <div className="shop-now-container d-flex g-10">
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
                    <img src={testImage} width="100%" height="250px" />
                </div>
            </div>

            <TrendingNow />

            <div className="shop-now-container d-flex g-10">
                <div className='image-div'>
                    <img src={testImage} width="100%" height="250px" />
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
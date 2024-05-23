import '../styles/Home.css';
import storeItems from '../data/items.json';
import formatCurrency from '../utilities/formatCurrency';
import testImage from '../UI-Images/Bohemian-1024x780.webp'
function Home() {
    const items = storeItems;
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
                        <div className="card" key={item.id}>
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
                    <button className="button button-width">SHOP NOW</button>
                </div>

                <div className='image-div'>
                    <img src={testImage} width="100%" height="250px" />
                </div>
            </div>

            <div className="trending-now-container">
                <div className="trending-now-heading d-flex align-center">
                    <h4>Trending Now</h4>
                    <div className="d-flex g-5">
                        <button className="button">left</button>
                        <button className="button">right</button>
                    </div>
                </div>

                <div className="trending-content">
                    {items.map((item) => (
                        <div className="card" key={item.id}>
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
                <div className='image-div'>
                    <img src={testImage} width="100%" height="250px" />
                </div>

                <div className='text-div d-flex'>
                    <h4>Create harmonous living</h4>
                    <p>Our producrs are all made to standaed sizes
                        so that you can mix and match them freely
                    </p>
                    <button className="button button-width">SHOP NOW</button>
                </div>


            </div>

        </div>
    )
}
export default Home;
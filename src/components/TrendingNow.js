import items from '../data/items.json';
import formatCurrency from '../utilities/formatCurrency';
import '../styles/TrendingNow.css';
import { useNavigate } from 'react-router-dom';
function TrendingNow() {
    const navigate = useNavigate();
    const handleCardClick = (id) => {
        navigate(`/store/${id}`);
        window.scrollTo(0, 0);
    };
    return (
        <div className="trending-now-container d-flex">
            <div className="trending-now-heading d-flex align-center">
                <h4>Trending Now</h4>
                <div className="d-flex g-5">
                    <button className="button">left</button>
                    <button className="button">right</button>
                </div>
            </div>

            <div className="trending-content">
                <div className="scrolling-div d-flex g-10">
                    {items.map((item) => (
                        <div className="card" key={item.id}
                            onClick={function () {
                                handleCardClick(item.id)
                            }}>
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


        </div>
    )
}
export default TrendingNow;
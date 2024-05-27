import Items from '../data/items.json';
import '../styles/Store.css';
import formatCurrency from '../utilities/formatCurrency';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import leftArrow from '../icons/left-arrow.svg';
import StoreItem from '../pages/StoreItem';
function Store() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    let [selectedCategory, setSelectedCategory] = useState('All');
    let categoryArray = [];
    const navigate = useNavigate();
    Items.map((item) => {
        categoryArray.push(item.category);
    })

    let filteredCategory = categoryArray.filter((value, index) => {
        return categoryArray.indexOf(value) === index
    })


    const handleCategorySelect = function (value) {
        setSelectedCategory(value)

    }
    let [selectedItem, setSelectedItem] = useState({});

    const selectItem = (item) => {
        setSelectedItem(item);
    }


    const clearSelectedItem = function (value) {
        setSelectedItem(value);

    };


    return (
        <div>
            {Object.keys(selectedItem).length === 0 &&
                <div>
                    <div className="category-heading d-flex align-center">
                        <div className="home-button-div d-flex align-center g-5 cursor-pointer"
                            onClick={() => navigate('/')}
                        >
                            <img src={leftArrow} width="20px" height="20px" />
                            <h4 className="font-10">Home</h4>
                        </div>
                        <h3>{selectedCategory}</h3>
                    </div>
                    <div className="category-button-container d-flex g-5">
                        <button onClick={() => {
                            handleCategorySelect('All')
                        }} className="button white-button font-10">All</button>
                        {filteredCategory.sort().map((category) => (
                            <button onClick={() => {
                                handleCategorySelect(category)
                            }} className="button white-button font-10" key={category}>{category}</button>
                        ))

                        }
                    </div>

                    <div className="grid-container g-10">

                        {Items.map((item) => {
                            if (selectedCategory === 'All' || selectedCategory === item.category) {
                                return (
                                    <div onClick={() => { selectItem(item) }} className="card" key={item.id}>
                                        <div className="image-div">
                                            <img src={item.imgUrl} width="100%" height="100%" />
                                        </div>
                                        <div className="image-info-div">
                                            <p>{item.name}</p>
                                            <h4>{formatCurrency(item.price)}</h4>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            }

            {Object.keys(selectedItem).length !== 0 &&
                <StoreItem item={selectedItem}
                    handleclearItem={clearSelectedItem} />}
        </div >
    )
}
export default Store;


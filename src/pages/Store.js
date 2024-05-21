import Items from '../data/items.json';
import StoreItem from '../components/StoreItem';
function Store() {
    return (
        <div>
            <h2>Store</h2>
            {Items.map((item) => (
                <div key={item.id}>
                    <StoreItem {...item} />
                </div>
            ))}

        </div>

    )
}
export default Store;


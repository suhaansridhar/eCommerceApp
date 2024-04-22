import { useState } from "react";
import { connect } from "react-redux";

import { addToCart } from "../Items/ItemsActionCreators";


function ItemsComponent({ itemsList }){
    const [sortOrder, setSortOrder] = useState("");

    function handleSortOrder(event){
        const sortOrder = event.target.value;
        const sortedItems = [...itemsList].sort((a, b) => {
            if(sortOrder === 'lowToHigh'){
                return parseFloat(a.price) - parseFloat(b.price);
            }else if(sortOrder === 'highToLow'){
                return parseFloat(b.price) - parseFloat(a.price);
            }else{
                return 0
            }
        });
    }

    return(
        <div className="items--container">

            <div className="items--container--01">
                <h1>Items</h1>
                <select id="sortOrder" onChange={handleSortOrder} value={sortOrder}>
                    <option>Sort</option>
                    <option value="lowToHigh">Prices: Low - High</option>
                    <option value="highToLow">Prices: high - low</option>
                </select>
                <button>Reset Filter</button>
            </div>

            <div className="items--card--generator">
                {itemsList.map((item) => {
                    return(
                        <div key={item.id} className="item--card">
                            <h3>Name of the item: {item.name}</h3>
                            <img src={item.src} alt={item.alt} />
                            <h4>Price of the item: {item.price}</h4>
                            <button onClick={() => addToCart(item)}>Add To Cart</button>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        itemsList: state.itemsReducer
    }
}

const mapDispathToProps = dispatch => {
    return{
        addToCart : item => dispatch(addToCart(item))
    }
}

export default connect(mapStateToProps, mapDispathToProps)(ItemsComponent)
import { useState } from "react";
import { connect } from "react-redux";
import image1 from "../assets/LouisVuitton_00.webp";
import image2 from "../assets/LouisVuitton_01.webp";
import image3 from "../assets/LouisVuitton_02.webp";
import image4 from "../assets/LouisVuitton_03.webp";
import image5 from "../assets/LouisVuitton_04.avif";
import image6 from "../assets/LouisVuitton_05.webp";
import image7 from "../assets/SaintLaurent_00.jpeg";
import image8 from "../assets/SaintLaurent_01.avif";
import image9 from "../assets/SaintLaurent_02.avif";
import image10 from "../assets/SaintLaurent_03.webp";
import image11 from "../assets/SaintLaurent_04.jpeg";

import { addToCart } from "../Items/ItemsActionCreators";


function ItemsComponent(){

    const [itemsList, setItemsList] = useState(
        [
            {id: 1, name: "Louis Vuitton", src: image1, price: "200 euros", alt: "Louis Vuitton"},
            {id: 2, name: "Louis Vuitton", src: image2, price: "300 euros", alt: "Louis Vuitton"},
            {id: 3, name: "Louis Vuitton", src: image3, price: "400 euros", alt: "Louis Vuitton"},
            {id: 4, name: "Louis Vuitton", src: image4, price: "500 euros", alt: "Louis Vuitton"},
            {id: 5, name: "Louis Vuitton", src: image5, price: "210 euros", alt: "Louis Vuitton"},
            {id: 6, name: "Louis Vuitton", src: image6, price: "230 euros", alt: "Louis Vuitton"},
            {id: 7, name: "Louis Vuitton", src: image7, price: "240 euros", alt: "Louis Vuitton"},
            {id: 8, name: "Louis Vuitton", src: image8, price: "140 euros", alt: "Louis Vuitton"},
            {id: 9, name: "Louis Vuitton", src: image9, price: "620 euros", alt: "Louis Vuitton"},
            {id: 10, name: "Louis Vuitton", src: image10, price: "280 euros", alt: "Louis Vuitton"},
            {id: 11, name: "Louis Vuitton", src: image11, price: "975 euros", alt: "Louis Vuitton"}
        ]
    );
    const originalItemsList = [...itemsList];

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
        setItemsList(sortedItems);
    }

    function resetFilter(){
        setItemsList([...originalItemsList]);
    }

    return(
        <div className="items--container">

            <div className="items--container--01">
                <h1>Items</h1>
                <select id="sortOrder" onChange={handleSortOrder}>
                    <option>Sort</option>
                    <option value="lowToHigh">Prices: Low - High</option>
                    <option value="highToLow">Prices: high - low</option>
                </select>
                <button onClick={resetFilter}>Reset Filter</button>
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
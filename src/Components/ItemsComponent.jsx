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
            {id: 2, name: "Louis Vuitton", src: image2, price: "200 euros", alt: "Louis Vuitton"},
            {id: 3, name: "Louis Vuitton", src: image3, price: "200 euros", alt: "Louis Vuitton"},
            {id: 4, name: "Louis Vuitton", src: image4, price: "200 euros", alt: "Louis Vuitton"},
            {id: 5, name: "Louis Vuitton", src: image5, price: "200 euros", alt: "Louis Vuitton"},
            {id: 6, name: "Louis Vuitton", src: image6, price: "200 euros", alt: "Louis Vuitton"},
            {id: 7, name: "Louis Vuitton", src: image7, price: "200 euros", alt: "Louis Vuitton"},
            {id: 8, name: "Louis Vuitton", src: image8, price: "200 euros", alt: "Louis Vuitton"},
            {id: 9, name: "Louis Vuitton", src: image9, price: "200 euros", alt: "Louis Vuitton"},
            {id: 10, name: "Louis Vuitton", src: image10, price: "200 euros", alt: "Louis Vuitton"},
            {id: 10, name: "Louis Vuitton", src: image11, price: "200 euros", alt: "Louis Vuitton"}
        ]
    );
    const originalItemsList = [...itemsList];

    return(
        <div className="items--container">
            <h1>Items</h1>
            <div className="items--card--generator">
                {itemsList.map((item) => {
                    return(
                        <div key={item.id} className="item--card">
                            <h3>Name of the item: {item.name}</h3>
                            <img src={item.src} alt={item.alt} />
                            <h4>Price of the item: {item.price}</h4>
                            <button>Add To Cart</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ItemsComponent

// const mapStateToProps = (state) => {
//     return{

//     }
// }

// const mapDispathToProps = dispatch => {
//     buyItem : () => dispatch(addToCart())
// }

// export default connect(mapStateToProps, mapDispathToProps)(ItemsComponent)
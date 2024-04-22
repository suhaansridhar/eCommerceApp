import { useState } from "react";
import { connect } from "react-redux";

function ItemsComponent(){

    const itemsList = useState([]);
    const originalItemsList = [...itemsList];

    return(
        <div>
            <h1>Items : </h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{

    }
}

const mapDispathToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispathToProps)(ItemsComponent)
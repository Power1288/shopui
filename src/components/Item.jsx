import React from 'react';
import {useDispatch} from "react-redux";
import {addItem} from "../actions/cart.action";


const Item = ({item}) => {

    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addItem(item))
    }

    return (
        <div className="item-slot">
            <p>{item.name}</p>
            <img src={"./assets/icons/"+ item.model+".png"} alt=""/>
            <div className="content-infoItem">
                <button onClick={handleAdd}>Ajouter</button>
                <div className="price-item">
                    <p>{item.price} $</p>
                </div>
            </div>
        </div>
    );
};

export default Item;

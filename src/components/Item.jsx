import React from 'react';

const Item = ({item}) => {
    return (
        <div className="item-slot">
            <p>{item.name}</p>
            <img src={"./assets/icons/"+ item.model+".png"} alt=""/>
            <div className="content-infoItem">
                <button>Ajouter</button>
                <div className="price-item">
                    <p>{item.price} $</p>
                </div>
            </div>
        </div>
    );
};

export default Item;

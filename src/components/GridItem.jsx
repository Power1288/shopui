import React from 'react';
import {useSelector} from "react-redux";
import Item from "./Item";

const GridItem = ({filter}) => {

    const items = useSelector((state) => state.itemsReducer);
    const filterKey = useSelector((state) => state.filterReducer);
    return (
        <div className="content-itemShop">
            {
                items
                    .filter((item) => {
                        if (item.name.includes(filterKey)) {
                            return item;
                        }
                        return null;
                    })
                    .filter((item) => {
                        switch (filter) {
                            case 'Tout':
                                return item;
                            case "Nourriture":
                                return  item.type === filter ? item : null;
                            case "Boisson":
                                return  item.type === filter ? item : null;
                            case "Divers":
                                return  item.type === filter ? item : null;
                            default:
                                return null;
                        }
                    })
                    .map((item, index) => {
                    return <Item item={item} key={index}/>
                })
            }
        </div>
    );
};

export default GridItem;

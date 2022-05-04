import React,{useState} from 'react';
import GridItem from "./GridItem";

const Content = () => {


    const choise = ["Tout","Boisson","Nourriture","Divers"];
    const [choiseState,setChoiseState] = useState("Tout");


    const handleClick = (index) => {
        setChoiseState(choise[index]);


    }

    return (
        <div className="content-shop">
            <div className="navigation">
                <ul>
                    {
                        choise.map((item, index) => {
                            return (
                                <div key={index} className={choiseState === choise[index] ? "item-nav active" : "item-nav"} onClick={() => handleClick(index)}>
                                    <div className="item-icon">
                                        <i className="fa-solid fa-cart-arrow-down"></i>
                                    </div>
                                    {item}
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
            <GridItem filter={choiseState}/>
        </div>
    );
};

export default Content;

import React,{useState,useEffect} from 'react';
import GridItem from "./GridItem";

const Content = () => {


    const choise = ["Tout","Boisson","Nourriture","Divers"];
    const [choiseState,setChoiseState] = useState("Tout");


    const handleClick = (index) => {
        setChoiseState(choise[index]);
    }

    useEffect(() => {
        window.addEventListener("message" , (event) => {
            const data = event.data;

            if (data.type === "openShop"){
               if (data.display === "show") {
                   let body = document.getElementsByTagName("body")[0];
                   body.style.display = "block";
                   const dataName = data.name
                   const divName = document.getElementById("name")
                   divName.innerHTML = dataName;

                   const dataMoney = data.money
                   const divMoney = document.getElementById("dataMoney")
                   divMoney.innerHTML = dataMoney + "<span>$</span>";;

                   const dataBank = data.bankMoney
                   const divBank = document.getElementById("dataBank")
                   divBank.innerHTML = dataBank + "<span>$</span>";
               }
            }
        })
    },[])

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

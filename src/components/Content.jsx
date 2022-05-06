import React,{useState,useEffect} from 'react';
import GridItem from "./GridItem";
import {useDispatch} from "react-redux";
import {loadCart} from "../actions/item.action";
import {loadUser} from "../actions/user.action";



const Content = () => {


    const dispatch = useDispatch();

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

                   dispatch(loadUser({money:dataMoney,bank:dataBank}));

                   dispatch(loadCart(data.items))
               }
            }else if (data.type === "updateMoney") {
                const dataMoney2 = data.money
                const divMoney2 = document.getElementById("dataMoney")
                divMoney2.innerHTML = dataMoney2 + "<span>$</span>";;

                const dataBank2 = data.bank
                const divBank2 = document.getElementById("dataBank")
                divBank2.innerHTML = dataBank2 + "<span>$</span>";
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

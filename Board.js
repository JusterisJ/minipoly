import React, {useState} from 'react';
import "../App.css"
import PropertyList from "./PropertyList";
import Dice from "./Dice";

const Board = () => {

    const [properties, setProperties] = useState([
        {
            title: "Property 0",
            color: "orange",
            price: 40,
            bought: false
        },
        {
            title: "Property 1",
            color: "red",
            price: 50,
            bought: false
        },
        {
            title: "Property 2",
            color: "orange",
            price: 46,
            bought: false
        },
        {
            title: "Property 3",
            color: "red",
            price: 46,
            bought: false
        },
        {
            title: "Property 4",
            color: "pink",
            price: 46,
            bought: false
        },
        {
            title: "Property 5",
            color: "orange",
            price: 46,
            bought: false
        },
        {
            title: "Property 6",
            color: "purple",
            price: 46,
            bought: false
        },
        {
            title: "Property 7",
            color: "green",
            price: 46,
            bought: false
        },
        {
            title: "Property 8",
            color: "lightgrey",
            price: 46,
            bought: false
        },
        {
            title: "Property 9",
            color: "pink",
            price: 46,
            bought: false
        },
        {
            title: "Property 10",
            color: "orange",
            price: 46,
            bought: false
        },
        {
            title: "Property 11",
            color: "yellow",
            price: 46,
            bought: false
        },
        {
            title: "Property 12",
            color: "lightblue",
            price: 46,
            bought: false
        },
        {
            title: "Property 13",
            color: "red",
            price: 46,
            bought: false
        }

    ])
    const [money, setMoney] = useState(200)
    const [playerPosition, setPlayerPosition] = useState(0)
    function buyProperty() {
        let price = properties[playerPosition].price
        if (properties[playerPosition].bought === true) return
        if (money > price) {
            setMoney(money - price)

            let updatedProperties = properties.map((property, index) => {
                if (index === playerPosition) {

                    return {...property, ...{ bought: true}};
                } else {
                   return property
                }
            })
            console.log(updatedProperties, typeof updatedProperties)
            setProperties(updatedProperties)
        } else {
            console.log(`not enought money`)
        }
        console.log(typeof properties)
    }
    function diceRoll() {
        let number = randomNumber(1, 6)
        if ((number + playerPosition) > 13) {
            let overflow =  playerPosition + number - 14
            console.log(overflow)
            move(overflow)
            setMoney(money + 200)
        } else {
            move(playerPosition + number)
        }
        console.log(`dice rolled:`, number)
        console.log(`player position:`, playerPosition )
    }
    function move(position) {
        setPlayerPosition(position)
    }

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }


    return (
        <div className="board relative">
            <div className="money absolute">{money}</div>
            <PropertyList
                playerPosition={playerPosition}
                properties={properties}
                buyProperty={buyProperty}
            />
            <Dice
            diceRoll={diceRoll}
            />
        </div>
    );
};

export default Board;
import React from 'react';
import "../App.css"

const Dice = ({diceRoll}) => {
    return (
        <div className="diceComp absolute">
            <button onClick={()=> {diceRoll()}}><img className="dicePic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Two_red_dice_01.svg/2560px-Two_red_dice_01.svg.png" alt=""/></button>

        </div>
    );
};

export default Dice;
import React from 'react';
import "../App.css"


const Property = ({title, color, price, bought, index, playerPosition, buyProperty}) => {
    return (
        <div className="property dFlex aCenter flexColumn  jCenter">
            {index === playerPosition && <div className="playerDiv"><img className="playerDivPic" src="https://i0.wp.com/www.actionfigureinsider.com/wpress/wp-content/uploads/2022/05/Car.png?fit=800%2C640" alt=""/> </div> }
            <div className="propertyColorDiv" style={{backgroundColor:color}}></div>
            <div>{title}</div>
            <div>Price: {price}</div>
            {!bought && <button onClick={() => {buyProperty()}}>Buy</button>}

        </div>
    );
};

export default Property;
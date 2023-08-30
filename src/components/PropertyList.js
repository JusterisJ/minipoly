import React from 'react';
import Property from "./Property"
import property from "./Property";

const PropertyList = ({playerPosition, properties, buyProperty}) => {


    const propertiesDiv = properties.map((property,index) =>
        <Property
            title={property.title}
            color={property.color}
            price={property.price}
            index={index}
            bought={property.bought}
            playerPosition={playerPosition}
            buyProperty={buyProperty}
        />
     )
    return (
        <div className="board dFlex gap20 relative">
            {propertiesDiv}
        </div>
    );
};

export default PropertyList;
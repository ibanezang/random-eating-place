import React from 'react';

function EatingPlaceList(props){
    const places = props.places;
    let placeList = places.map(place => {
        return (
        <div>
            <h2>{place.name}</h2>
        </div>)
    })
    return (
        <div>
            {placeList}
        </div>
    );
}

export default EatingPlaceList;
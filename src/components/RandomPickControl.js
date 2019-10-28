import React, {useState} from 'react';

function RandomPickControl(props) {
    const places = props.places;
    const [selected, setSelected] = useState(0);
    return (
        <div>
            <div className="text-center">
                <h1>{places[selected].name}</h1>
            </div>
            <div className="text-center">
                <button className="btn btn-primary" onClick={() => setSelected(getRandom(places.length))}>Pick Random</button>
            </div>
        </div>
    );
}

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

export default RandomPickControl;
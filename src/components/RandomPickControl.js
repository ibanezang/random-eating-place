import React, {useState} from 'react';

function RandomPickControl(props) {
    const places = props.places;
    const [selected, setSelected] = useState(-1);
    return (
        <div>
            <div className="random-display text-center">
                <h1>{selected === -1 ? "Please tap on Pick Random Button" : places[selected].name}</h1>
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
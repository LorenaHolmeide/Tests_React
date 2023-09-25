import React, { useState } from 'react';

export default function Switch() {

    const [isOn, setIsOn] = useState(false)

    const toggleSwitch = () => {
        setIsOn(prevIsOn => !prevIsOn);
    };

    return (
        <div>
            <p>The switch is {isOn ? 'on' : 'off'}</p>
            <button onClick={toggleSwitch}>Toggle Switch</button>
        </div>
    );
}

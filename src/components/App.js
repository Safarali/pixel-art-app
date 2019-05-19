import React, { useState } from 'react';
import Canvas from './Canvas';
import ColorPicker from './ColorPicker';

const App = () => {
    const [color, setColor] = useState(0);
    return (
        <div className="App">
            <ColorPicker 
                currentColor={color}
                setColor={color => setColor(color)}
            />
            <Canvas
              currentColor={color}
            />
        </div>
    );
};

export default App;

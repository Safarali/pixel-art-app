import React from 'react';
import { Colors } from '../Colors';
import Pixel from './Pixel';

const ColorPicker = (props) => {

    return (
        <div className="color-picker">
            {Colors.map((color, index) => (
                <Pixel
                    key={index}
                    background={color}
                    current={Colors[props.currentColor] === color}
                    onClick={e => props.setColor(index)}
                />
            ))}
        </div>
    )
}

export default ColorPicker;
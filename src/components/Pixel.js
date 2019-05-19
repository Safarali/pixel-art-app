import React from 'react';
import classnames from 'classnames';


const Pixel = (props) => (
    <div 
        className={classnames(props.background, 'pixel', props.current ? 'current-color' : '')}
        onClick={props.onClick}
    >
    </div>
);

export default Pixel;
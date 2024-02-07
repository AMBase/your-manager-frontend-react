import './App.css';
import React, {useState} from 'react';


interface WrapProps {
    scale: number,
    translate: {
        x: number,
        y: number,
    },
    onMouseUp: React.MouseEventHandler,
    onMouseMove: React.MouseEventHandler,
    onMouseDown: React.MouseEventHandler,
    onWheel: React.WheelEventHandler,
}

const Wrap: React.JSX.Element = ({scale, translate, onMouseUp, onMouseMove, onMouseDown, onWheel}: WrapProps) => {
    const styles = {
        transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`
    }

    return (
        <div className="wrap">
            <div className="inner"
                 style={styles}
                 onMouseUp={onMouseUp}
                 onMouseMove={onMouseMove}
                 onMouseDown={onMouseDown}
                 onWheel={onWheel}
            >

                <div className="step">
                    <div className="step-text">Step</div>
                </div>

            </div>
        </div>
    );
}

export default Wrap;

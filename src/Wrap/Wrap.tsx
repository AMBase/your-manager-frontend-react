import React, { FC } from 'react';


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
    children?: React.ReactNode,
}

const Wrap: FC<WrapProps> = (props: WrapProps) => {
    const { translate, scale, onMouseUp, onMouseMove, onMouseDown, onWheel } = props;
    const styles = {
        transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`
    }

    return (
        <div className="wrap"
             onMouseUp={onMouseUp}
             onMouseMove={onMouseMove}
             onMouseDown={onMouseDown}
             onWheel={onWheel}
        >
            <div className="inner" style={styles}>
                {props.children}
            </div>
        </div>
    );
}

export default Wrap;

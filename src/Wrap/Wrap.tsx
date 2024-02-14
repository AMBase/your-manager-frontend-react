import React, {FC, useState} from 'react';


interface WrapProps {
    children?: React.ReactNode,
}

const Wrap: FC<WrapProps> = (props: WrapProps) => {
    const [isMoving, setIsMoving] = useState(false);
    const [prevPos, setPrevPos] = useState({x: 0, y: 0});
    const [translate, setTranslate] = useState({x: 0, y: 0});
    const [scale, setScale] = useState(1);
    const onMouseUp = () => {
        setIsMoving(false);
    }

    const onMouseMove: React.MouseEventHandler = (e: React.MouseEvent) => {
        if (isMoving) {
            let deltaX = e.clientX - prevPos.x;
            let deltaY = e.clientY - prevPos.y;

            setTranslate({
                x: translate.x + deltaX,
                y: translate.y + deltaY,
            });
            setPrevPos({x: e.clientX, y: e.clientY});
        }
    }

    const onMouseDown: React.MouseEventHandler = (e: React.MouseEvent) => {
        setIsMoving(true);
        setPrevPos({x: e.clientX, y: e.clientY});
    }

    const onWheel: React.WheelEventHandler = (e: React.WheelEvent) => {
        if (!e.ctrlKey) {
            return;
        }

        e.preventDefault();
        e.deltaY < 0 ? zoomIn() : zoomOut();
    }

    const zoomIn = () => {
        if (scale > 1.5) {
            return;
        }

        setScale(scale + 0.1);
    }

    const zoomOut = () => {
        if (scale < 0.6) {
            return;
        }

        setScale(scale - 0.1);
    }

    const onDragEnter = (e: React.DragEvent) => {
        console.log("onDragEnter", e);
    }

    const onDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    }

    const onDragLeave = (e: React.DragEvent) => {
        console.log("onDragLeave", e);
    }

    const onDrop = (e: React.DragEvent) => {
        console.log("onDrop", e);
    }

    const events = { onMouseDown, onMouseMove, onMouseUp, onWheel, onDragEnter, onDragOver, onDragLeave, onDrop }
    const styles = {
        transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`
    }

    return (
        <div className="wrap" {...events}>
            <div className="inner" style={styles}>
                {props.children}
            </div>
        </div>
    );
}

export default Wrap;

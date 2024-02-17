import React, {FC, useState} from 'react';
import { useCanvasContext } from "contexts/canvas";



const Canvas = () => {
    const [isMoving, setIsMoving] = useState(false);
    const [prevPos, setPrevPos] = useState({x: 0, y: 0});
    const [translate, setTranslate] = useState({x: 0, y: 0});
    const [scale, setScale] = useState(1);
    const { items, addItem } = useCanvasContext();
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
        addItem({
            id: Math.floor(Math.random() * 1000),
            name: "Заполните имя"
        });
    }

    const events = { onMouseDown, onMouseMove, onMouseUp, onWheel, onDragEnter, onDragOver, onDragLeave, onDrop };
    const styles = {
        transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`
    }

    const itemList = items.map(item =>
        <div className="item" key={item.id}>
            <div className="item-name">{item.name}</div>
        </div>
    );

    return (
        <div className="wrap" {...events}>
            <div className="inner" style={styles}>
                {itemList}
            </div>
        </div>
    );
}

export default Canvas;

import './App.css';
import React, {useState} from 'react';

// import logo from './logo.svg';

class Action {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

type Actions = Array<Action>;

const actions: Actions = [
    new Action(1, "input"),
    new Action(2, "output"),
    new Action(3, "decoder"),
    new Action(4, "encoder"),
];

function App(): React.JSX.Element {
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


    const actionList = actions.map(action =>
        <div className="action" key={action.id}>
          <div className="action-name">{action.name}</div>
        </div>
    );

    const styles = {
        transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`
    }

    return (
        <div className="app">
            <div className="actions">{actionList}</div>

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
        </div>
    );
}

export default App;

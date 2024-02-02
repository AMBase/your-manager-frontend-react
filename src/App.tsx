import './App.css';
import React, { useState } from 'react';

// import logo from './logo.svg';

function App(): React.JSX.Element {
  const [isMoving, setIsMoving] = useState(false);
  const [prevPos, setPrevPos] = useState({x: 0, y: 0});
  const [translate, setTranslate] = useState({x: 0, y: 0});
  const [scale, setScale] = useState(1);
  const onMouseUp = () => {
    setIsMoving(false);
  }

  const onMouseMove = e => {
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

  const onMouseDown = e => {
    setIsMoving(true);
    setPrevPos({x: e.clientX, y: e.clientY});
  }

  const onWheel = e => {
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


  const styles = {
    transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`
  }

  return (
    <div className="app">
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

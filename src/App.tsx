import './App.css';
import React from 'react';
// import logo from './logo.svg';

function App(): React.JSX.Element {
  const onMouseUp = e => {
    console.log("onMouseUp", e);
  }

  const onMouseMove = e => {
    console.log("onMouseMove", e);
  }

  const onMouseDown = e => {
    console.log("onMouseDown", e);
  }

  return (
    <div className="app">
      <div className="wrap">
        <div className="inner"
             onMouseUp={onMouseUp}
             onMouseMove={onMouseMove}
             onMouseDown={onMouseDown}>
        </div>
      </div>
    </div>
  );
}

export default App;

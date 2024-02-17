import './App.css';
import React, { useState } from 'react';
import Canvas from './Canvas';
import Actions from "./Actions";
import { CanvasProvider } from "contexts/canvas";


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
    return (
        <div className="app">
            <CanvasProvider>
                <Actions actions={actions} />
                <Canvas />
            </CanvasProvider>
        </div>
    );
}

export default App;

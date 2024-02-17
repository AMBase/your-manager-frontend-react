import './App.css';
import React, { useState } from 'react';
import Canvas from './Canvas';
import Actions from "./Actions";
import { useCanvasContext } from "contexts/canvas";


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
    const { addItem } = useCanvasContext();

    const onDrop = (e: React.DragEvent) => {
        console.log("onDrop", e);
        addItem({
            id: Math.floor(Math.random() * 1000),
            name: "Заполните имя"
        });
    }

    return (
        <div className="app">
            <Actions actions={actions} />
            <Canvas onDrop={onDrop} />
        </div>
    );
}

export default App;

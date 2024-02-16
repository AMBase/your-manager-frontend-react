import './App.css';
import React, { useState } from 'react';
import Canvas from './Canvas';
import Actions from "./Actions";


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
    const [items, setItems] = useState([]);

    const itemList = items.map(item =>
        <div className="item" key={item.id}>
            <div className="item-name">{item.name}</div>
        </div>
    );

    const onDrop = (e: React.DragEvent) => {
        console.log("onDrop", e);
        setItems([...items, {
            id: Math.floor(Math.random() * 1000),
            name: "Заполните имя"
        }]);
    }

    return (
        <div className="app">
            <Actions actions={actions} />
            <Canvas onDrop={onDrop}>{itemList}</Canvas>
        </div>
    );
}

export default App;

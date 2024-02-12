import './App.css';
import React, { useState } from 'react';
import Wrap from './Wrap';


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

    const onMouseDown = (e: React.MouseEvent)  => {
        console.log(e);
    }

    const actionList = actions.map(action =>
        <div className="action" key={action.id} onMouseDown={onMouseDown}>
          <div className="action-name">{action.name}</div>
        </div>
    );

    const itemList = items.map(item =>
        <div className="item" key={item.id}>
            <div className="item-name">{item.name}</div>
        </div>
    );

    return (
        <div className="app">
            <div className="actions">{actionList}</div>

            <Wrap>{itemList}</Wrap>
        </div>
    );
}

export default App;

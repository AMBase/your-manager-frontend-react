import React from 'react';
import Action , { ActionInterface } from './Action';


interface ActionsProps {
    actions: ActionInterface[],
}

const Actions: React.FC<ActionsProps> = (props) => {
    const actionList = props.actions.map(action =>
        <Action key={action.id} action={action} />
    );


    return (
        <div className="actions">{actionList}</div>
    );
}

export default Actions;
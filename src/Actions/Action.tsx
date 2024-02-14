import React from 'react';

export interface ActionInterface {
    id: number,
    name: string,
}

interface ActionProps {
    action: ActionInterface,
}

const Action: React.FC<ActionProps> = ({ action }) => {
    const el = React.useRef<HTMLDivElement>(null);
    const [elCopied, setElCopied] = React.useState(null)

    const onDragStart = (e: React.DragEvent) => {
        console.log("onDragStart", e);
    }

    return (
        <div className="action"
             ref={el}
             onDragStart={onDragStart}
             draggable={true}
        >
            <div className="action-name">{action.name}</div>
        </div>
    );
}

export default Action;
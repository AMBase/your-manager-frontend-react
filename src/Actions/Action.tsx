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
    const onMouseDown = (e: React.MouseEvent) => {
        const nodeCloned = el.current.cloneNode(true);

        document.body.appendChild(nodeCloned);
        console.log("nodeCloned", nodeCloned);

        setElCopied(nodeCloned);
    }

    const onMouseUp = (e: React.MouseEvent) => {
        document.body.removeChild(elCopied);
        setElCopied(null);
    };

    return (
        <div className="action"
             ref={el}
             onMouseDown={onMouseDown}
             onMouseUp={onMouseUp}
             >
            <div className="action-name">{action.name}</div>
        </div>
    );
}

export default Action;
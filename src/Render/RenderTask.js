import {useRef, useMemo} from 'react';

const RenderTask = ({emitter, id, rootIsMount, children}) => {
    const idRef = useRef(id);
    idRef.current = id;
    useMemo(() => {
        if (rootIsMount) {
            emitter.emit('add-render-task', idRef.current);
        }
    }, [emitter, rootIsMount]);
    return children;
};

export default RenderTask;
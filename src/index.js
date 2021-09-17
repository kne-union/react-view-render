import React, {useEffect, useState, useRef} from 'react';
import Render from './Render';
import useEvent from './useEvent';
import reactDom from 'react-dom';
import once from 'lodash/once';
import {currentProfile} from './preset';
import './index.scss';


const RenderRoot = ({onInitComplete, ...props}) => {
    const [rootIsMount, setRootIsMount] = useState(false);
    const renderEvent = useEvent();
    useEffect(() => {
        let taskList = [];
        const complete = once(() => {
            onInitComplete && onInitComplete();
        });
        const sub = renderEvent.addListener('add-render-task', (path) => {
            if (taskList.indexOf(path) === -1) {
                taskList.push(path);
            }
        });
        const sub2 = renderEvent.addListener('complete-render-task', (path) => {
            const index = taskList.indexOf(path);
            if (index > -1) {
                taskList.splice(index, 1);
            }
            if (taskList.length === 0) {
                complete();
            }
        });
        setRootIsMount(true);
        return () => {
            sub.remove();
            sub2.remove();
        };
    }, [renderEvent]);
    return <Render {...props} id="root" renderEvent={renderEvent} rootIsMount={rootIsMount}/>
};

export default RenderRoot;

export const renderToString = async (props) => {
    const RenderView = ({onInitComplete, ...props}) => {
        const ref = useRef(null);
        return <div ref={ref}><RenderRoot {...props} onInitComplete={() => {
            onInitComplete(ref.current.innerHTML);
        }}/></div>;
    };
    const root = document.createElement('div');
    root.style.display = 'none';
    document.body.appendChild(root);
    const output = new Promise((resolve) => {
        reactDom.render(<RenderView {...props} onInitComplete={(html) => {
            resolve(html);
        }}/>, root);
    });
    output.then((html) => {
        document.body.removeChild(root);
        return html;
    });
    return output;
};

export {applyVariable} from './util';
export const profile = currentProfile.profile;
export const profileMap = currentProfile.profileMap;
export {default as preset} from './preset';

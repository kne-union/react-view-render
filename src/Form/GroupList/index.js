import React, {useRef} from 'react';
import Context from '../../Logic/Context';
import {GroupList} from '@kne/react-form-antd';
import fieldDecorator from '../fieldDecorator';

const _GroupList = fieldDecorator(({title, name, wrappedClassName, children, groupItem, empty, ...props}) => {
    const ref = useRef(null);
    return <div {...props} className={wrappedClassName}>
        <Context functions={{$onAdd: (...args) => ref.current.onAdd(...args)}} variable={{
            $groupList: <GroupList ref={ref} name={name} empty={empty}>
                {(key, {onAdd, onRemove}) => {
                    return <Context variable={{$key: key}} functions={{$onAdd: onAdd, $onRemove: () => onRemove(key)}}>
                        {groupItem}
                    </Context>;
                }}
            </GroupList>
        }}>
            {children}
        </Context>
    </div>
});

export default _GroupList;
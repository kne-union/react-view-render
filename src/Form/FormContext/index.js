import React from 'react';
import {useFormContext} from '@kne/react-form-antd';
import classnames from 'classnames';
import Context from '../../Logic/Context';
import {applyVariable} from '../../util';

const FormContext = ({className, shadowDom, children, ...props}) => {
    const formContext = useFormContext();

    const inner = <Context variable={{
        $formContext: formContext
    }}>
        {children}
    </Context>;

    return shadowDom ? inner : <div {...props} className={classnames(className, 'view-render-form-context')}>
        {inner}
    </div>;
};

export default applyVariable(FormContext);
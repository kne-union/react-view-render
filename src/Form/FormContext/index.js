import React from 'react';
import {useFormContext} from '@kne/react-form-antd';
import classnames from 'classnames';
import Context from '../../Logic/Context';
import {applyVariable} from '../../util';

const FormContext = ({className, children, ...props}) => {
    const formContext = useFormContext();
    return <div {...props} className={classnames(className, 'view-render-form-context')}>
        <Context variable={{
            $formContext: formContext
        }}>
            {children}
        </Context>
    </div>;
};

export default applyVariable(FormContext);
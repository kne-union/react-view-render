import React from 'react';
import {Steps as _Steps} from 'antd';
import {applyVariable} from '../../util';

const {Step} = _Steps;

const Steps = ({steps, ...props}) => {
    return <Steps {...props}>
        {steps.map((item) => <Step key={item.title} {...item}/>)}
    </Steps>
};

export default applyVariable(Steps);
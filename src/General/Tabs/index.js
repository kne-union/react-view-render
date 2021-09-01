import React from 'react';
import {Tabs} from "antd";
import {applyVariable} from '../../util';

const _Tabs = ({tabPanes, ...props}) => {
    return <Tabs {...props}>
        {tabPanes.map(({tabPanes, children, ...props}) => {
            return <Tabs.TabPane {...props}>
                {children}
            </Tabs.TabPane>;
        })}
    </Tabs>
};

export default applyVariable(_Tabs);
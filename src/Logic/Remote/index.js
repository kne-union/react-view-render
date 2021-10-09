import React, {useState, useEffect} from 'react';
import Context from '../Context';
import {Spin, Result} from 'antd';
import {applyVariable} from '../../util';
import classnames from 'classnames';

const Remote = ({resource, spin = {}, shadowDom, children, className, ...props}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);
    useEffect(() => {
        setLoading(true);
        Promise.resolve(typeof resource === 'function' ? resource() : null).then((data) => {
            setData(data);
        }, (e) => {
            console.error(e);
            setError(e.message);
        }).finally(() => {
            setLoading(false);
        });
    }, [resource]);
    if (loading) {
        return <Spin {...spin}/>;
    }
    if (error) {
        return <Result status="error" title="加载异常" subTitle={error}/>;
    }

    const inner = <Context variable={{$item: data}}>{children}</Context>;

    return shadowDom ? inner : <div {...props} className={classnames(className, 'view-render-remote')}>
        {inner}
    </div>;
};

export default applyVariable(Remote);
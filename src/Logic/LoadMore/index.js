import React, {useState, useEffect, useCallback, useRef} from 'react';
import Context from '../Context';
import {Spin, Result} from 'antd';
import {applyVariable} from '../../util';
import classnames from 'classnames';

const LoadMore = ({resource, distance, spin = {}, children, className, ...props}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const currentPage = useRef(0);
    currentPage.current = data.length + 1;
    const distanceRef = useRef(distance || 20);
    const loadingRef = useRef(loading);
    loadingRef.current = loading;
    const hasNextRef = useRef(true);
    const load = useCallback(() => {
        if (loadingRef.current) {
            return;
        }
        setLoading(true);
        Promise.resolve(typeof resource === 'function' ? resource(currentPage.current) : null).then((data) => {
            if (data && data.hasOwnProperty('list') && data.hasOwnProperty('hasNext')) {
                const {list, hasNext} = data;
                hasNextRef.current = hasNext;
                setData((old) => {
                    const newData = old.slice(0);
                    newData.push(list);
                    return newData;
                });
            } else {
                console.warn('返回数据必须包含list和hasNext属性');
            }
        }, (e) => {
            console.error(e);
            setError(e.message);
        }).finally(() => {
            setLoading(false);
        });
    }, [resource]);

    const scrollHandler = useCallback((e) => {
        if (e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < distanceRef.current && hasNextRef.current) {
            load();
        }
    }, [load]);

    useEffect(() => {
        load();
    }, [load]);
    if (error) {
        return <Result status="error" title="加载异常" subTitle={error}/>;
    }

    return <div {...props} className={classnames(className, 'view-render-load-more')} onScroll={scrollHandler}>
        <Context variable={{$item: data}}>{children}</Context>
        {loading ? <Spin {...spin}/> : null}
    </div>;
};

export default applyVariable(LoadMore);
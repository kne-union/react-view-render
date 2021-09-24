import React, {useState, useEffect, useMemo} from 'react';
import {fetchRemote as resetFetchRemote} from "../preset";
import merge from 'lodash/merge';

const componentCache = {};
const withRemote = (WrappedComponent) => {
    return ({url, fetchRemote, content, fallback = null, ...props}) => {
        const {id, rootIsMount, renderEvent} = props;
        const [isLoading, setIsLoading] = useState(true);
        const [requestData, setRequestData] = useState({});
        useEffect(() => {
            if (url) {
                const loadError = (e) => {
                    console.error(url, id, e);
                };
                setIsLoading(true);
                if (!componentCache[url]) {
                    componentCache[url] = (fetchRemote || resetFetchRemote)(url);
                }
                componentCache[url].then((res) => {
                    let content = res.data;
                    if (typeof content === 'string') {
                        try {
                            content = JSON.parse(res.data);
                        } catch (e) {
                            loadError(e);
                        }
                    }
                    setRequestData(content);
                    setIsLoading(false);
                }, (e) => {
                    loadError(e);
                });
            }
        }, [url]);

        useMemo(() => {
            if (rootIsMount) {
                renderEvent.emit('add-render-task', id);
            }
        }, [rootIsMount]);

        if (!url && content) {
            return <WrappedComponent {...props} content={content}/>
        }

        if (isLoading) {
            return fallback;
        }
        return <WrappedComponent {...props} content={merge({}, requestData, content)} fetchRemote={fetchRemote}
                                 fallback={fallback}/>;
    };
};

export default withRemote;
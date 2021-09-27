import React, {useRef} from 'react';
import ViewRender from '@kne/react-view-render';
import '@kne/react-view-render/dist/index.css';
import {ConfigProvider, Button} from 'antd';
import {interceptors} from '@kne/react-form-antd';
import '@kne/react-form-antd/dist/index.css';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';

interceptors.input.use('string-date-range', (value) => {
    const output = [];
    if (Array.isArray(value) && value.length === 2) {
        output.push(moment(value[0]));
        output.push(moment(value[1]));
    }
    if(typeof value==='string'){
        return moment(value);
    }
    return output;
});

interceptors.output.use('string-date-range', (value) => {
    const output = [];
    if (Array.isArray(value) && value.length === 2) {
        output.push(value[0].format('YYYY.MM.DD'));
        output.push(value[1].format('YYYY.MM.DD'));
    }
    if(toString.call(value).toString()==='[object Object]'){
        return value.format('YYYY.MM.DD')
    }
    return output;
});

const App = () => {
    const formContext = useRef(null);
    return <ConfigProvider autoInsertSpaceInButton={false} locale={zhCN}>
        <ViewRender url="/react-view-render/resumeTest.json" content={{
            functions: {
                $getFormContext: (context) => {
                    formContext.current = context;
                }
            }
        }}/>
    </ConfigProvider>;
};

export default App;

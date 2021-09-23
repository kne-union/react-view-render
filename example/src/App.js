import React, {useRef} from 'react';
import ViewRender, {preset} from '@kne/react-view-render';
import {ConfigProvider, Button} from 'antd';
import {interceptors} from '@kne/react-form-antd';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';

const Hello = () => {
    return "Hello";
};

preset.components([
    {
        component: Hello,
        profile: {
            id: "Hello"
        }
    }
]);


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

interceptors.input.use('string-date-picker', (value) => {
    const date = value ? moment(value) : null;
    return date;
});
interceptors.output.use('string-date-picker', (value) => {
    const date = value ? moment(value).format() : null;
    return date;
});
const App = () => {
    const formContext = useRef(null);
    return <ConfigProvider autoInsertSpaceInButton={false} locale={zhCN}>
        <ViewRender url="/react-view-render/resume/index.json" content={{
            functions: {
                $getFormContext: (context) => {
                    formContext.current = context;
                }
            }
        }}/>
        <Button onClick={()=>{
            if(formContext.current){
                formContext.current.emitter.emit('form-submit');
            }
        }}>提交</Button>
    </ConfigProvider>;
};

export default App;

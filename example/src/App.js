import ViewRender from '@kne/react-view-render';
import {message, Modal} from 'antd';
import {ConfigProvider} from 'antd';
import {interceptors} from '@kne/react-form-antd';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';

interceptors.input.use('string-date-range', (value) => {
    const output = [];
    if (Array.isArray(value) && value.length === 2) {
        output.push(moment(value[0]));
        output.push(moment(value[1]));
    }
    return output;
});

interceptors.output.use('string-date-range', (value) => {
    const output = [];
    if (Array.isArray(value) && value.length === 2) {
        output.push(value[0].format('YYYY.MM.DD'));
        output.push(value[1].format('YYYY.MM.DD'));
    }
    return output;
});

const App = () => {
    return <ConfigProvider autoInsertSpaceInButton={false} locale={zhCN}>
        <ViewRender lib={{
            message,
            modal: {
                confirm: Modal.confirm
            }
        }} url="/react-view-render/resume/index.json"/>
    </ConfigProvider>;
};

export default App;
import ViewRender from '@kne/react-view-render';
import {message, Modal} from 'antd';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

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
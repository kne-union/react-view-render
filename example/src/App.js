import ViewRender from '@kne/react-view-render';
import {message, Modal} from 'antd';

const App = () => {
    return <ViewRender lib={{
        message,
        modal: {
            confirm: Modal.confirm
        }
    }} url="/resume/index.json"/>;
};

export default App;

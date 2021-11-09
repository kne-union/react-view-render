import loadable from '@loadable/component';

const components = {
    List: loadable(() => import('./Logic/List')),
    Text: loadable(() => import('./General/Text')),
    Row: loadable(() => import('./Layout/Row')),
    Col: loadable(() => import('./Layout/Col')),
    Space: loadable(() => import('./Layout/Space')),
    Condition: loadable(() => import('./Logic/Condition')),
    Form: loadable(() => import('./Form/index')),
    Input: loadable(() => import('./Form/Input')),
    InputNumber: loadable(() => import('./Form/InputNumber')),
    RadioGroup: loadable(() => import('./Form/RadioGroup')),
    Select: loadable(() => import('./Form/Select')),
    Switch: loadable(() => import('./Form/Switch')),
    DatePicker: loadable(() => import('./Form/DatePicker')),
    DateRangePicker: loadable(() => import('./Form/DateRangePicker')),
    Cascader: loadable(() => import('./Form/Cascader')),
    TextArea: loadable(() => import('./Form/TextArea')),
    Avatar: loadable(() => import('./Form/Avatar')),
    Upload: loadable(() => import('./Form/Upload')),
    CheckboxGroup: loadable(() => import('./Form/CheckboxGroup')),
    SubmitButton: loadable(() => import('./Form/SubmitButton')),
    ResetButton: loadable(() => import('./Form/ResetButton')),
    Remote: loadable(() => import('./Logic/Remote')),
    Mapping: loadable(() => import('./Logic/Mapping')),
    State: loadable(() => import('./Logic/State')),
    Button: loadable(() => import('./General/Button')),
    Img: loadable(() => import('./General/Img')),
    Div: loadable(() => import('./Layout/Div')),
    GroupList: loadable(() => import('./Form/GroupList')),
    Card: loadable(() => import('./General/Card')),
    Component: loadable(() => import('./Logic/Component')),
    Empty: loadable(() => import('./General/Empty')),
    Tabs: loadable(() => import('./General/Tabs')),
    Rename: loadable(() => import('./Logic/Rename')),
    Modal: loadable(() => import('./General/Modal')),
    Icon: loadable(() => import('./General/Icon')),
    FormModal: loadable(() => import('./Form/FormModal')),
    LoadMore: loadable(() => import('./Logic/LoadMore')),
    Tooltip: loadable(() => import('./General/Tooltip')),
    Affix: loadable(() => import('./General/Affix')),
    Alert: loadable(() => import('./General/Alert')),
    Drawer: loadable(() => import('./General/Drawer')),
    Popconfirm: loadable(() => import('./General/Popconfirm')),
    Progress: loadable(() => import('./General/Progress')),
    Spin: loadable(() => import('./General/Spin')),
    Steps: loadable(() => import('./General/Steps')),
    FormContext: loadable(() => import('./Form/FormContext')),
    Iframe: loadable(() => import('./General/Iframe')),
    Table:loadable(()=>import('./General/Table'))
};

export default components;

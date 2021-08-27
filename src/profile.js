import button from './General/Button/profile.json';
import text from './General/Text/profile.json';
import row from './Layout/Row/profile.json';
import img from './General/Img/profile.json';
import col from './Layout/Col/profile.json';
import list from './Logic/List/profile.json';
import condition from './Logic/Condition/profile.json';
import form from './Form/profile.json';
import input from './Form/Input/profile.json';
import submitButton from './Form/SubmitButton/profile.json';
import avatar from './Form/Avatar/profile.json';
import cascader from './Form/Cascader/profile.json';
import datePicker from './Form/DatePicker/profile.json';
import checkboxGroup from './Form/CheckboxGroup/profile.json';
import inputNumber from './Form/InputNumber/profile.json';
import radioGroup from './Form/RadioGroup/profile.json';
import resetButton from './Form/ResetButton/profile.json';
import select from './Form/Select/profile.json';
import textArea from './Form/TextArea/profile.json';
import upload from './Form/Upload/profile.json';
import remote from './Logic/Remote/profile.json';
import mapping from './Logic/Mapping/profile.json';
import state from './Logic/State/profile.json';
import space from './Layout/Space/profile.json';
import div from './Layout/Div/profile.json';

const profile = {
  'general': {
    id: 'general',
    label: '通用',
    components: [button, text, img]
  },
  'layout': {
    id: 'layout',
    label: '布局',
    components: [row, col, space, div]
  },
  'form': {
    id: 'form',
    label: '表单',
    components: [form, input, submitButton, resetButton, avatar, cascader, checkboxGroup, datePicker, inputNumber, radioGroup, select, textArea, upload]
  },
  'logic': {
    id: 'logic',
    label: '逻辑',
    components: [list, condition, remote, mapping, state]
  }
};

export default profile;

export const profileMap = {
  [button.id]: button,
  [text.id]: text,
  [row.id]: row,
  [col.id]: col,
  [list.id]: list,
  [condition.id]: condition,
  [input.id]: input,
  [form.id]: form,
  [avatar.id]: avatar,
  [cascader.id]: cascader,
  [checkboxGroup.id]: checkboxGroup,
  [datePicker.id]: datePicker,
  [inputNumber.id]: inputNumber,
  [radioGroup.id]: radioGroup,
  [select.id]: select,
  [textArea.id]: textArea,
  [upload.id]: upload,
  [submitButton.id]: submitButton,
  [resetButton.id]: resetButton,
  [img.id]: img,
  [remote.id]: remote,
  [mapping.id]: mapping,
  [state.id]: state,
  [space.id]: space,
  [div.id]: div
};
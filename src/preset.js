import components from './components';
import axios from 'axios';

const resetData = {
    currentComponents: Object.assign({}, components),
    fetchRemote: axios.get
};

export const currentComponents = resetData.currentComponents;

export const fetchRemote = resetData.fetchRemote;


const extendComponents = (list = []) => {
    const customComponents = {};
    list.forEach(({component, profile}) => {
        customComponents[profile.id] = component;
    });
    Object.assign(resetData.currentComponents, customComponents);
};

const resetFetchRemote = (fetcher) => {
    resetData.fetchRemote = fetcher;
};

export default {
    components: extendComponents,
    fetchRemote: resetFetchRemote
};
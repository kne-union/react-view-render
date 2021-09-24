import components from './components-sync';
import {default as profile, profileMap} from './profile';
import axios from 'axios';

const resetData = {
    currentComponents: Object.assign({}, components),
    fetchRemote: axios.get,
    currentProfile: Object.assign({}, {profile, profileMap})
};

export const currentComponents = resetData.currentComponents;

export const currentProfile = resetData.currentProfile;

export const fetchRemote = (...args) => resetData.fetchRemote(...args);

const extendComponents = (list = [], classify = {id: 'extra', label: '扩展'}) => {
    const customComponents = {};
    if (!resetData.currentProfile.profile[classify.id]) {
        resetData.currentProfile.profile[classify.id] = {
            id: classify.id,
            label: classify.label,
            components: []
        };
    }
    list.forEach(({component, profile}) => {
        customComponents[profile.id] = component;
        resetData.currentProfile.profileMap[profile.id] = profile;
        resetData.currentProfile.profile[classify.id].components.push(profile);
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
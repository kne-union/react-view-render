import components from './components';

export const currentComponents = Object.assign({}, components);

const extendComponents = (list = []) => {
    const customComponents = {};
    list.forEach(({component, profile}) => {
        customComponents[profile.id] = component;
    });
    Object.assign(currentComponents, customComponents);
};

export default {
    components: extendComponents
};
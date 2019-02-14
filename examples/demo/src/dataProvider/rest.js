import simpleRestProvider from 'vn-kooch-data-simple-rest';

const restProvider = simpleRestProvider('http://localhost:4000');
export default (type, resource, params) =>
    new Promise(resolve =>
        setTimeout(() => resolve(restProvider(type, resource, params)), 500)
    );

const mapObject = require('../mapObject');
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const transformedObject = mapObject(testObject);

console.log(transformedObject);

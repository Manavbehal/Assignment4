const _ = require('underscore');


function mapObject(obj,cb) {
    return _.mapObject(obj, (value) => {
        return typeof value === 'string' ? value.toUpperCase() : value;
    });
}

module.exports = mapObject;

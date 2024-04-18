const _ = require('underscore');

function values(obj) {
    
    return _.chain(obj)
            .omit(_.isFunction)
            .values()
            .value();
}

module.exports = values;

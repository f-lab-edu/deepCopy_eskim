'use strict';


function deepCopy(obj  = null) {
    if(typeof obj !== 'object' || obj === null) return obj;

    if (obj instanceof Date) return new Date(obj.getTime());

    if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags);

    const keys = Object.keys(obj);

    const copied = Array.isArray(obj) ? [] : {};
    for(let key of keys) {
        copied[key] = deepCopy(obj[key]);
    }

    return copied;
}

module.exports = deepCopy;
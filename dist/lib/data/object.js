export function fetchFromObject(obj, prop) {
    if (typeof obj === 'undefined') {
        return false;
    }
    var _index = prop.indexOf('.');
    if (_index > -1) {
        return fetchFromObject(obj[prop.substring(0, _index)], prop.substr(_index + 1));
    }
    return obj[prop];
}
//# sourceMappingURL=object.js.map
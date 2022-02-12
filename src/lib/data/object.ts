export function fetchFromObject(obj: Record<string, any>, prop: string): any {
  if (typeof obj === 'undefined') {
    return false;
  }

  var _index = prop.indexOf('.');
  if (_index > -1) {
    return fetchFromObject(
      obj[prop.substring(0, _index)],
      prop.substr(_index + 1),
    );
  }

  return obj[prop];
}

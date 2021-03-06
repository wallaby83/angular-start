/* https://peter-cho.gitbook.io/book/3/3_5 */
export const add = (array: Array<any>, firstValue: number=0) => {
  return array.reduce((a, v) => a + v, firstValue);
};

export const pick = (obj: Object, keys: Array<string>) =>
  keys
    .map((key) => ({ [key]: obj[key] }))
    .reduce((a, obj) => Object.assign(a, obj));

export const mapValues = (obj: Object, fn: Function) => {
  Object.entries(obj)
    .map(([k, v]) => ({ [k]: fn(v) }))
    .reduce((a, obj) => Object.assign(a, obj));
};

export const map = (set, fn: Function) => {
  let arr = [];
  for (const elem of set) {
    const res = fn(elem);
    arr.push(res);
  }
  return arr;
};

export const firstElem = (arr) => arr.length > 0 ? arr[0] : null;

export const lastElem = (arr) => (arr.length > 0 ? arr[arr.length - 1] : null);

export const getKeyByValue = (obj, value) =>
  Object.keys(obj).find((key) => obj[key] === value);

export const fillObject = (obj, value) => 
  Object.keys(obj).map(key => obj[key] = value)

export const isEmpty = (val) => {
  if (typeof val === "string"
  || Array.isArray(val)) {
    return val.length === 0
  }

  return false;
}

export const getDateTime = () => {
  const date = new Date();
  return {
    timeString: `${date.toLocaleDateString('kr-KR')} ${date.toLocaleTimeString('kr-KR')}`,
    month: date.getMonth()+1
  }
}
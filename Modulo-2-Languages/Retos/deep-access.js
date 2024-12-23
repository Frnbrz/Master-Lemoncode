const myObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      }
    }
  }
};

const deepGet = (obj, ...properties) => {
  let result = obj;
  for (let i = 0; i < properties.length; i++) {
    if (result === undefined) {
      return undefined;
    }
    result = result[properties[i]];
  }
  return result;
};

console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject));  // {a: 1, b: {...}}

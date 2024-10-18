const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
clone.b.c = 3;
console.log(`Original object: ${JSON.stringify(original)}, Clone: ${JSON.stringify(clone)}`);

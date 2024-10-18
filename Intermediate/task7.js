const flattenArray = (arr) => arr.flat(Infinity);

const nestedArray = [1, [2, [3, 4]], 5];
console.log(`Flattened array: ${flattenArray(nestedArray)}`);

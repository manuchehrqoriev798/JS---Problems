const intersection = (arr1, arr2) => arr1.filter(value => arr2.includes(value));

const array1 = [1, 2, 3];
const array2 = [2, 3, 4];
console.log(`Intersection: ${intersection(array1, array2)}`);

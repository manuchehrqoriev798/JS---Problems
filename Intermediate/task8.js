const getUniqueValues = (arr) => [...new Set(arr)];

const arrayWithDuplicates = [1, 2, 2, 3, 4, 4];
console.log(`Unique values: ${getUniqueValues(arrayWithDuplicates)}`);

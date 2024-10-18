const removeDuplicates = (arr) => [...new Set(arr)];

const duplicateArray = [1, 2, 2, 3, 4, 4]; 
console.log(`Array without duplicates: ${removeDuplicates(duplicateArray)}`);

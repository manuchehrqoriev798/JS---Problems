const capitalizeWords = (sentence) => sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

const sentence = "hello world";
console.log(`Capitalized sentence: "${capitalizeWords(sentence)}"`);

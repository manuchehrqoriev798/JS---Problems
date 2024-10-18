const isSubstring = (str1, str2) => str1.includes(str2);

const mainString = "Hello, world!";
const subString = "world";
console.log(`Is "${subString}" a substring of "${mainString}"? ${isSubstring(mainString, subString)}`);

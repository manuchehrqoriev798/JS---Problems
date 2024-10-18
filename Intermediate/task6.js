const areAnagrams = (str1, str2) => {
    const normalize = str => str.replace(/[^a-zA-Z]/g, "").toLowerCase().split("").sort().join("");
    return normalize(str1) === normalize(str2);
};

const strA = "listen";
const strB = "silent";
console.log(`Are "${strA}" and "${strB}" anagrams? ${areAnagrams(strA, strB)}`);

const countWords = (str) => {
    const words = str.split(/\s+/);
    const wordCount = {};
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });
    return wordCount;
};

const str = "hello world hello";
console.log(`Word occurrences: ${JSON.stringify(countWords(str))}`);

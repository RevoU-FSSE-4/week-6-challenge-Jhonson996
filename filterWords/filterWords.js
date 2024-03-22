function filterWords(words) {
  // Your code here
  const filteredWords = [];
  const empty = "there is no word with 3 characters"
  for(let i = 0; i < words.length; i++){
    const word = words[i];
    if (word.length > 3) {
      filteredWords.push(word);
    } else {
      return empty;
    }
  }
  return filteredWords;

}
console.log(filterWords(["a","bb","aa"]))

// module.exports = filterWords;

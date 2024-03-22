function filterWords(words) {
  // Your code here
  const filteredWords = [];
  for(let i = 0; i < words.length; i++){
    const word = words[i];
    if (word.length > 3) {
      filteredWords.push(word);
    }
  }
  return filteredWords;

}
module.exports = filterWords;

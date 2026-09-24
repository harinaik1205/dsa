function mostFrequentWords(words) {
  //my solution
  if (!words.length) return null;
  //   const freqWords = {};
  //   let max = 0;
  //   let freqWord;
  //   for (let word of words) {
  //     freqWords[word] = freqWords[word] + 1 || 1;
  //     if (freqWords[word] > max) {
  //       max = freqWords[word];
  //       freqWord = word;
  //     }
  //   }

  //optimized solution
  const frequency = new Map();
  let max = 0;
  let mostFrequentWord = null;

  for (const word of words) {
    const count = (frequency.get(word) || 0) + 1;
    if (count > max) {
      max = count;
      mostFrequentWord = word;
    }
  }

  return mostFrequentWord;
}

console.log(mostFrequentWords(["cat", "dog", "cat", "bird", "dog", "cat"]));
console.log(mostFrequentWords(["toString", "toString"]));

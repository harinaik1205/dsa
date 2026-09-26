//Problem statement:
// Group words by their first letter

//Example:
const words = ["apple", "banana", "avocado", "blueberry", "cherry"];
//const output = {a:["apple","avocado"], b:["banana", "blueberry"], c:["cherry"]};

function groupWordsByFirstLetter(words) {
  const res = {};
  for (const word of words) {
    const firstLetter = word[0];
    if (res[firstLetter]) {
      res[firstLetter].push(word);
    } else {
      res[firstLetter] = [word];
    }
  }
  return res;
}

console.log(groupWordsByFirstLetter(words));

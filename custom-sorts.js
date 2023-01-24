function ageSort(users) {
  // Your code here
  return users.sort(compareAges);
}

function compareAges(a, b) {
  return a.age - b.age;
}

function oddEvenSort(arr) {
  // Your code here
  return arr.sort(oddEvenCompare);
}

function oddEvenCompare(a, b) {
  if (a % 2 === 0 && b % 2 === 1) return 1;
  if (a % 2 === 1 && b % 2 === 0) return -1;

  return a - b;
}

function validAnagrams(s, t) {
  // Your code here
  let sSorted = s.split('').sort();
  let tSorted = t.split('').sort();

  return sSorted.join('') === tSorted.join('');
}

function reverseBaseSort(arr) {
  // Your code here
  return arr.sort(baseCompare);
}

function baseCompare(a, b) {
  if (a.toString().length < b.toString().length) return 1;
  if (a.toString().length > b.toString().length) return -1;
  return a - b;
}

function frequencySort(arr) {
  // Your code here
  let count = {};

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] = count[arr[i]] + 1 || 1;
  }
  return arr.sort((a, b)=> {
    if (count[a] === count[b]) return b - a;
    return count[a] - count [b];
  });
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];

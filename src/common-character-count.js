const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  let smallestArr;
  let largestArr;

  if (arr1.length > arr2.length) {
    smallestArr = arr2;
    largestArr = arr1;
  } else {
    smallestArr = arr1
    largestArr = arr2;
  }

  for (let i = smallestArr.length - 1; i >= 0; i--) {
    for (let n = largestArr.length - 1; n >= 0; n--) {
      if (smallestArr[i] === largestArr[n]) {
        delete largestArr[n];
        result += 1;
        break;
      }
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};

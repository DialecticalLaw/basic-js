const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(/* n */) {
  // let result = 0;
  // const str = n.toString();
  // for (let i = 0; i < str.length; i++) {
  //   if (i === 0) {
  //     console.log(str.slice(1))
  //     if (Number(str.slice(1)) > result) {
  //       result = Number(str.slice(1));
  //     }
  //   } else if (i === str.length - 1) {
  //     console.log(str.slice(-1))
  //     if (str.length === 2) {
  //       if (Number(str.slice(0, 1)) > result) {
  //         result = Number(str.slice(0, 1));
  //       }
  //     } else if (Number(str.slice(-1)) > result) {
  //       result = Number(str.slice(-1));
  //     }
  //   } else {
  //     if (Number(str.slice(0, i) + str.slice(i + 1)) > result) {
  //       result = Number(str.slice(0, i) + str.slice(i + 1));
  //     }
  //   }
  // }
  // return result;
  throw new NotImplementedError('Not implemented');
}

module.exports = {
  deleteDigit
};

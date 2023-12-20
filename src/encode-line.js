const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(/*str*/) {
  // let result = '';
  // let counter = 0;
  // const uniqueSet = new Set();
  // for (let i = 0; i < str.length; i++) {
  //   uniqueSet.add(str[i]);
  // }

  // const uniqueArr = [...uniqueSet];

  // for (let i = 0; i < uniqueArr.length; i++) {
  //   for (let n = 0; n < str.length; n++) {
  //     if (str[n] === uniqueArr[i]) {
  //       counter += 1;
  //     }
  //   }
  //   if (counter !== 0) {
  //     result += `${counter.toString()}${uniqueArr[i]}`;
  //     counter = 0;
  //   } else {
  //     result += str[i];
  //   }
  // }
  throw new NotImplementedError('Not implemented');
}

module.exports = {
  encodeLine
};

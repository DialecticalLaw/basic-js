const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(/* arr */) {
    throw new NotImplementedError('Not implemented');


    // let variable = [];
    // let result = 1;
    // for (let item of arr) {
    //   if (Array.isArray(item)) {
    //     let nested = this.calculateDepth(item, 'nested');
    //     variable = variable.concat(nested.arr);
    //     result += nested.count + 1;
    //   } else {
    //     variable.push(item);
    //   }
    // }

    // if (par === 'nested') {
    //   return {
    //     count: result,
    //     arr: variable
    //   };
    // } else if (!result) {
    //   return result + 1;
    // } else {
    //   return result;
    // }
  }
}

module.exports = {
  DepthCalculator
};

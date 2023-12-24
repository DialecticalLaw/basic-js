const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }

  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }

  if (options.separator === undefined) {
    options.separator = '+';
  }

  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    if (i && options.separator) {
      result += options.separator.toString();
    }
    result += `${str}`;

    if (options.addition !== undefined) {
      for (let n = 0; n < options.additionRepeatTimes; n++) {
        if (n && options.additionSeparator) {
          result += `${options.additionSeparator}`;
        }

        if (Array.isArray(options.addition)) {
          result += options.addition.join(',');
        } else {
          result += `${options.addition}`;
        }
      }
    }
  }
  return result;
}

module.exports = {
  repeater
};

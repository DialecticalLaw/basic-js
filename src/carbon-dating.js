const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const activityNum = Number(sampleActivity);
  if (activityNum >= 15 ||typeof sampleActivity !== 'string' || typeof activityNum !== 'number' || isNaN(activityNum) || activityNum <= 0 || activityNum === Infinity || activityNum === -Infinity) {
    return false;
  }
  return Math.abs(Math.ceil((Math.log(activityNum / MODERN_ACTIVITY)) / Math.LN2 / HALF_LIFE_PERIOD**-1)) + 1;
}

module.exports = {
  dateSample
};

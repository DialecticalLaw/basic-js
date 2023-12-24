const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) !== '[object Date]' || Object.getOwnPropertyNames(date).length !== 0) {
    throw new Error('Invalid date!');
  }

  const month = date.toString().split(' ')[1];
  switch (month) {
    case 'Dec':
      return 'winter';
    case 'Jan':
      return 'winter';
    case 'Feb':
      return 'winter';
    case 'Mar':
      return 'spring';
    case 'Apr':
      return 'spring';
    case 'May':
      return 'spring';
    case 'Jun':
      return 'summer';
    case 'Jul':
      return 'summer';
    case 'Aug':
      return 'summer';
    case 'Sep':
      return 'autumn';
    case 'Oct':
      return 'autumn';
    case 'Nov':
      return 'autumn';
  }
}

module.exports = {
  getSeason
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const emailArr = email.split('');
  const emailFilteredDog = emailArr.filter(item => item === '@');
  if (emailFilteredDog.length > 1) {
    const dogLastIndex = emailArr.findLastIndex(item => item === '@');
    return email.slice(dogLastIndex + 1);
  }
  const dogIndex = emailArr.findIndex(item => item === '@');
  return email.slice(dogIndex + 1);
}

module.exports = {
  getEmailDomain
};

/**
 * @file High-precision implements with javascript.
 *
 * cpselvis (cpselvis@gmail.com)
 * August 15th, 2016
 */

/**
 * @brief Add
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var add = function (a, b) {
  var i = a.length - 1,
      j = b.length - 1;
  var carry = 0;

  var ret = '';
  while (i >= 0 || j >= 0) {
    var x = 0, y = 0, sum;
    if (i >= 0) {
      x = a[i] - '0';
      i --;
    }
    if (j >= 0) {
      y = b[j] - '0';
      j --;
    }
    sum = x + y + carry;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }
    ret = sum + ret;
  }
  if (carry) {
    ret = carry + ret;
  }
  console.log(ret);
  return ret;
};

/**
 * @brief Subtract
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var subtract = function (a, b) {

};

/**
 * @brief Multiply
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var multiply = function (a, b) {

};

/**
 * @brief Divide
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var divide = function (a, b) {

};


// Call

add('333', '222');

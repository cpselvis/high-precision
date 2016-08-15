/**
 * @file High-precision implements with javascript.
 *
 * cpselvis (cpselvis@gmail.com)
 * August 15th, 2016
 */

/**
 * @brief Compare between a and b
 * @param {string} a
 * @param {string} b
 * @return {boolean} return `true` if a > b
 */
var compare = function (a, b) {
  var i = a.length,
      j = b.length;

  if (i > j) {
    return true;
  } else if (i === j) {
    return a > b;
  }
  return false;
};

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
    } else {
      carry = 0;
    }
    ret = sum + ret;
  }
  if (carry) {
    ret = carry + ret;
  }
  return ret;
};

/**
 * @brief Subtract
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var subtract = function (a, b) {
  if (!compare(a, b)) {
    return '-' + subtract(b, a);
  }
  var i = a.length - 1,
      j = b.length - 1;

  var borrow = 0;

  var ret = '';
  while (i >= 0 || j >= 0) {
    var x = 0, y = 0, diff;
    if (i >= 0) {
      x = a[i] - '0';
      i --;
    }
    if (j >= 0) {
      y = b[j] - '0';
      j --;
    }

    diff = x - y - borrow;
    if (x < y) {
      diff += 10;
      borrow = 1;
    } else {
      borrow = 0;
    }
    ret = diff + ret;
  }
  return ret.replace(/^0+/, '');
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

console.log(add('1409','1612') === '3021', true);

console.log(subtract('1409', '1612') === '-203', true);

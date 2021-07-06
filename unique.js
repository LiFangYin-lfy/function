/**
 * 数组去重
 */

function unique1(arr) {
  return [...new Set(arr)]
}

function unique2(arr) {
  var obj = {};
  return arr.filter(ele => {
    if (!obj[ele]) {
      obj[ele] = true;
      return true;
    }
  })
}

function unique3(arr) {
  var result = [];
  arr.forEach(ele => {
    if (result.indexOf(ele) == -1) {
      result.push(ele)
    }
  })
  return result;
}

/**
 * 字符串去重
 */

String.prototype.unique = function () {
  var obj = {},
    str = '',
    len = this.length;
  for (var i = 0; i < len; i++) {
    if (!obj[this[i]]) {
      str += this[i];
      obj[this[i]] = true;
    }
  }
  return str;
}
//去除连续的字符串 
function uniq(str) {
  return str.replace(/(\w)\1+/g, '$1')
}

export default {
  unique1,
  unique2,
  unique3,
  uniq,
}
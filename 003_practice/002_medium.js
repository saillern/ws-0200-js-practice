/**
 *  文字列のローテート
 *
 *  文字列を入力された数だけローテートさせる関数を実装してください
 *
 *  example:
 *    'library',  1 => 'ylibrar'
 *    'library',  3 => 'arylibr'
 *    'library', -1 => 'ibraryl'
 *
 */
function rotate(str, num) {
  ans = '';
  if (num > 0){
    ans = str.slice(-num);
    ans += str.slice(0,str.length - num);
  }
  else{
    ans = str.slice(-num);
    ans += str.slice(0,-num);

  }
  return ans;
}

/**
 *  母音を除いた文字列
 *
 *  与えられた文字列から母音を除いた関数を実装してください
 *
 *  example:
 *    'library' => 'lbrry'
 *    'apple' => 'ppl'
 *    'banana' => 'bnn'
 *
 */
function removeVowels(str) {
  const vowel = ["a","i","u","e","o"];
  let ans = '';
  for(let i = 0; i < str.length; i++){
    if (!(vowel.includes(str[i]))){
      ans += str[i];
    }
  }
  return ans;
}

/**
 *  文字列のカウント
 *
 *  ある文字列の中に特定の文字列がいくつ含まれるかカウントする関数を実装してください。
 *
 *  example:
 *    'abcdabeabc',  'abc' => 2
 *    'abc',  'abc' => 1
 *    'hogehoage',  'hoge' => 1
 *
 */
function countStr(s1, s2) {
  ans = 0;
  if (s1 === s2){
    return 1;
  }
  for(i = 0; i < s1.length - s2.length; i++){
    if (s1.slice(i,i+s2.length) == s2){
      ans += 1
    }
  }
  return ans;
}

/**
 *  引数に与えられたアルファベットの文字列が回文であること
 *  を確認するメソッドを実装してください
 *
 *  example:
 *      work => false
 *      anna => true
 *      madam => true
 *      level => true
 *
 */

function isPalindrome(str) {
  let a = Math.floor(str.length/2);
  let s1 = str.slice(-a).split("");
  s1 = s1.reverse();
  s1 = s1.join("");
  return  str.slice(0,a) == s1;
}

/**
 *  素数
 *
 *  入力された数字が素数であるか確認する関数を実装してください
 *
 *  example:
 *    1 => False
 *    2 => True
 *    3 => True
 *    6 => False
 *    9 => False
 *    11 => True
 *
 */
function isPrime(num) {
  if (num === 1)return false;
  for(i = 2; i*i <= num; i++){
    if ((num % i) === 0)return false;
  }
  return true;
}

/**
 *  配列の4と次の数字を抜いた合計
 *
 *  与えらた配列の合計を返す関数を実装してください。
 *  ただし、配列の中に4がある場合は、4とその次の数字を合計に含めないでください。
 *
 *  example:
 *    [1, 2, 3, 4] => 6
 *    [1, 2, 3, 4, 5] => 6
 *    [1, 4, 3, 4, 5] => 1
 *    [4, 3, 3, 5] => 8
 *    [4, 3, 3, 4] => 3
 *    [4] => 0
 *
 */
function sumWithout4andNext(array) {
  let ans = 0;
  let flag = false;
  for(let i = 0; i < array.length-1; i++){
    if (flag){
      flag = false;
      continue
    }
    if (array[i] === 4){
      if (array[i+1] != 4){
        flag = true;
      }
    }
    else{
      ans += array[i];
    }
  }
  if ((array.at(-2) != 4) && (array.at(-1) != 4))ans += array.at(-1);

  return ans;
}

module.exports = {
  rotate,
  removeVowels,
  countStr,
  isPalindrome,
  isPrime,
  sumWithout4andNext
}

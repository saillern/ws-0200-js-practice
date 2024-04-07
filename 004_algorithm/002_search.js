
/**
 *  2.3.1 リニアサーチ
 *
 *  リニアサーチを実装してください。(入力は数値のみ)
 *  二つ目の引数に合致した配列の添字を返却してください。
 *  合致のする数字のない場合は-1を返却してください。
 *
 *  example:
 *    [1, 3, 2, 4, 5], 3 => 1
 *    [5, 3, 2, 1], 6 => -1
 */

function linearSearch (array, target) {
  for(let i = 0; i < array.length;i++){
    if(array[i] === target){
      return i;
    }
  }
  return -1;
}

/**
 *  2.3.2 バイナリサーチ
 *
 *  バイナリサーチを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 2, 3, 4, 5], 2 => 2
 *    [1, 2, 3, 4] 5 => -1
 */

function binarySearch (array, target) {
  let l = 0;
  let r = array.length;
  while (l+1 != r){
    let mid = Number((l + r)/2);
    if (array[mid] === target){
      return mid;
    }
    if (array[mid] < array[r]){
      r = mid;
    }
    if (array[mid] > array[l]){
      l = mid;
    }
  }
  return -1;
}

module.exports = {
  linearSearch,
  binarySearch
}

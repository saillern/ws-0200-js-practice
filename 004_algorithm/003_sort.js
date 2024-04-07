/**
 *  2.2.1 バブルソート
 *
 *  バブルソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function bubbleSort (array) {
  for(let i = 0; i < array.length - 1; i++){
    for(let j = i; j < array.length; j++){
      if (array[i] > array[j]){
        let tmp = array[j];
        array[j] =  array[i];
        array[i] =  tmp;
      }
    }
  }
  return array
}

/**
 *  2.2.2 挿入ソート
 *
 *  挿入ソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function insertSort (array) {
  for(let i = 1; i < array.length; i++){
    for(let j = 0; j < i; j++ ){
      if(array[i] < array[j]){
        let tmp = array[i];
        array.splice(i,1);
        array.splice(j,0,tmp);
        break;
      }
    }
  }
  return array
}

/**
 *  2.2.3 マージソート
 *
 *  マージソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function mergeSort (arr) {
  let l = 0;
  let r = arr.length;
  let mid = Number((l + r)/2);
  ans = merge(arr.splice(0,mid),arr.splice(mid));
  return ans;
}

function merge(left, right) {
  let midL = Number(left.length/2);
  let midR = Number(right.length/2);
  if (midL === 0){
    return left;
  }
  if (midR === 0){
    return right;
  }
  merge(left.splice(0,midL),left.splice(midL));
  merge(right.splice(0,midR),right.splice(midR));
  let tmp = [];
  let l = 0;
  let r = 0;
  for(let i = 0; i < (left.length+right.length - 1); i++){
    if (l < left.length){
      if(left[l] < right[r]){
        tmp.push(left[l]);
        l++;
      }
    }
    if(r < right.length){
      if(left[l] > right[r]){
        tmp.push(right[r]);
        r++;
      }
    }
  }
  return tmp;
}

/**
 *  2.2.4 クイックソート
 *
 *  クイックソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function quickSort (a, start = 0, end = (a.length -1)) {
  if (end < 1){
    return a;
  }
  let pivot = a[Number((end + start)/2)];
  L = [];
  R = [];
  for(let i = start; i < end; i++){
    if (a[i] < pivot){
      L.push(a[i]);
    }
    else{
      R.push(a[i]);
    }
  }
  ansL = quickSort(L,0,L.length-1);
  ansR = quickSort(R,0,R.length-1);
  ansL.concat(ansR);
  return ansL;
};

module.exports = {
  bubbleSort,
  insertSort,
  mergeSort,
  quickSort
}

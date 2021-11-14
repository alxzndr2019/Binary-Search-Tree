

let num = [2,7,8,10,11,12,14,16,20,16]

function BinarySearch (array,target){
  left = 0
  right = array.length - 1

  while(left<right){
    let mid = Math.floor((left+right)/2)
    if (target === array[mid]){
      return mid
    }else if(target < array[mid]){
      right = mid - 1;
    }else{
      left = mid + 1;
    }
  }
  return false
}

console.log(BinarySearch(num,16))
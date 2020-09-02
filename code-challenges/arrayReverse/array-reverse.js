let reverseArray = (arr) => {
    var reversedArr = []
    for (let i = arr.length-1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

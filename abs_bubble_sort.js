const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  return reader.question(`Is ${el1} > ${el2}? Type yes or no.`, (res) => {
    return callback(res);
  });
}

function yesOrNo(res) {
  return (res == "yes" ? true : false);
}
//
// askIfGreaterThan(5, 8, yesOrNo);
// function madeAnySwaps

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1){
    askIfGreaterThan(arr[i], arr[i + 1], function(res) {
      if (yesOrNo(res)) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
        console.log(arr);
      } else {
        console.log(arr);
      }

    });
  } else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

innerBubbleSortLoop([5,3,1], 0, false, () => console.log("In outer bubble sort."));
// function absurdBubbleSort(arr, sortCompletionCallback) {
//
// }

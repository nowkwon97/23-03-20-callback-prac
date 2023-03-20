const exampleArray = [5, 2, 7, 3, 9, 123, 345, 24, 1];
function minValue(array, callback) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if(array[i] < min) {
      min = array[i];
    }
  }
  return callback(min);
}
const minValueExample = minValue(exampleArray, function(result) {
  return result * 2;
})
console.log(minValueExample);

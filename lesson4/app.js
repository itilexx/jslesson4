//DZ
var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
var tagCount = {};
for (var i = 0; i < tags.length; i++) {
  var tag = tags[i];
  if (!tagCount[tag]) {
    tagCount[tag] = 1;
  } else {
    tagCount[tag]++;
  }
}
console.log(tagCount);

//dop dz

var arr = [1,1,1,2,2,2,3,3,3,4,4,4,5,5,6,6,7,7,7,8,9,9];

var newArr = [];

for (var i = 0; i < arr.length; i++) {
  var curElement = arr[i];
  var duplicates = false;

  for (var j = 0; j < newArr.length; j++) {
    if (curElement === newArr[j]) {
      duplicates = true;
      break;
    }
  }
  if (!duplicates) {
    newArr.push(curElement);
  }
}

console.log(newArr);



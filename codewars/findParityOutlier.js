// You are given an array (which will have num length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers) {
  const evens = [];
  const odds = [];
  integers.forEach((num) => {
    num % 2 === 0 ? evens.push(num) : odds.push(num);
  });
  return evens.length === 1 ? evens[0] : odds[0];
}
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); //Should return: 11 (the only odd number)

function findOutlier2(integers) {
  const evens = integers.filter((num) => num % 2 === 0);
  const odds = integers.filter((num) => num % 2 !== 0);
  return evens.length === 1 ? evens[0] : odds[0];
}
console.log(findOutlier2([160, 3, 1719, 19, 11, 13, -21])); //Should return: 160 (the only even number)


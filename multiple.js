var result = 0;
for(i = 0; i < 999; i++){
  if(i%3 == 0 || i%5 == 0){
    result +=  i;
  }
}
console.log("result 1", result);


// Better solution

function multipleFinder(num, mult) {
  var value = Math.floor((num-1)/mult);
  return mult * (value+1)/2 * value;
}
console.log("result 2", multipleFinder(999,3) + multipleFinder(999,5) - multipleFinder(999,15));

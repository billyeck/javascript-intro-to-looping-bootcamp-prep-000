var a=1;

function whileLoop(n){
  while (n>0){
    console.log(n);
    n--;
  } return "done";
}

function incrementVariable() {
  a = a + 1;
  return a;
}

function doWhileLoop(int){
  do {
    console.log("I run once regardless.");
  } while (incrementVariable()<int+2);
}

function forLoop(ary){
  for (var i=1; i<26; i++){
    if (i=1){
      ary.push("I am 1 strange loop.");
    } else
    ary.push(`I am ${i} strange loops.`);
  }
}

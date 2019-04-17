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

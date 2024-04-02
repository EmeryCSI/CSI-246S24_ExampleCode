//traditional
function add(a, b) {
  return a + b;
}
//anonymous function syntax
const sum = function (a, b) {
  return a + b;
};
//(a, b) go to the following function body
const addition = (a, b) => {
  return a + b;
};
//going down to one line
//if we skip the curly brackets the return is automatic
const additionOneLine = (a, b) => a + b;
//here is one that takes no parameters
const print = () => console.log("Hello from print");
print();

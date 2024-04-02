//spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
//... = "all of the elements in"
const arr3 = [...arr1, ...arr2];
console.log(arr3);
// ... is also the rest operator
// "the rest of the parameters"
const total = (a, b, ...rest) => {
  console.log(rest);
  return a + b;
};

total(2, 3, 4, 5, 6, 7, 8);

//destructuring arrays
//destructuring is an easy way of splitting an array or object into individual variables
//place variable names inside of curly brackets
//const x = arr3[0];
const [x, y, z] = arr3;
console.log(x);
console.log(y);
console.log(z);
//destrucuring objects
const stu = {
  name: "Josh",
  phone: "234-567-8901",
};

//when destructuring objects you put your variables inside of {}
const { name, phone } = stu;
//we can use these variables
console.log(name);
console.log(phone);
//you can also use destructuring with different variable names
const { name: studentName, phone: studentPhone } = stu;
console.log(studentName);
console.log(studentPhone);

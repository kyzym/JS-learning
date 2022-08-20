let array = [];
const fib = num => {
  if (num < 2) {
    return num;
  }
  array.push(fib(num - 1) + fib(num - 2));
  console.log(array);
  return fib(num - 1) + fib(num - 2);
};

console.log(fib(6));

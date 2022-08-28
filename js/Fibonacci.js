// const fib = num => {
//   let result = [0, 1];
//   for (let i = 2; i <= num; i += 1) {
//     result.push(result[i - 1] + result[i - 2]);
//   }
//   return result[num];
// };

// console.log(fib(7));

const fib = num => {
  if (num < 2) {
    return num;
  }
  return fib(num - 1) + fib(num - 2);
};

console.log(fib(7));

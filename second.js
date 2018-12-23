function complexCalc(x) {
  return new Promise((resolve) => {
    // emulates a long running operation (contacting the server/ database/ some other system - IO)
    // asynchronous function
    setTimeout(() => {
      const ans = x * x;
      resolve(ans);
    }, 2000);
  });
}

function anotherComplexCalc(y) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (y === 36) {
        reject('Hey 36 is bad luck');
      } else {
        const ans = Math.sqrt(y);
        resolve(ans);
      }
    }, 2000);
  });
}

// chained asynchronous operations
const myword = complexCalc(4);
myword.then((a) => {
  console.log('First cal result ' + a);
  return anotherComplexCalc(a);
})
.then((b) => {
  console.log('Second cal result ' + b);
})
.catch((err) => {
  console.log(err);
});

console.log('finished calling complexCalc');
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
      const ans = Math.sqrt(y);
      resolve(ans);
    }, 2000);
  });
}

// chained asynchronous operations
async function performOperations(x) {
  const a = await complexCalc(x);
  console.log('First operation result is ' + a);
  if (a === 36) {
    throw new Error('Hey 36 is bad luck');
  }

  const b = await anotherComplexCalc(a);
  return b;
}

performOperations(6).then((result) => {
  console.log('Second operation result is ' + result);
})
.catch((err) => {
  console.log(err);
});

console.log('finished calling complexCalc');
function complexCalc(x, cb) {

  // emulates a long running operation (contacting the server/ database/ some other system - IO)
  // asynchronous function
  setTimeout(() => {
    const ans = x * x;
    cb(ans);
    // console.log('Long  running calc done');
  }, 2000);

  // console.log('Return from complex calc');
}

function anotherComplexCalc(y, cb) {
  setTimeout(() => {
    const ans = Math.sqrt(y);
    cb(ans);
  }, 2000);
}

// chained asynchronous operations
complexCalc(4, (a) => {
  console.log('the ans is ' + a);
  anotherComplexCalc(a, (b) => {
    console.log('The final ans is ' + b);
  });
});
console.log('finished calling complexCalc');
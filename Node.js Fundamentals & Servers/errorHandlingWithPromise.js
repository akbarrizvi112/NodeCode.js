function doSomethingAsyncPromise() {
  return new Promise((resolve, reject) => {
    // Simulate an error sometimes
    const randomNum = Math.random();
    if (randomNum > 0.5) {
      setTimeout(() => {
        resolve("Success!");
      }, 50);
    } else {
      setTimeout(() => {
        reject("Something went wrong!");
      }, 50);
    }
  });
}

doSomethingAsyncPromise()
  .then(result => {
    console.log("Result:", result);
  })
  .catch(err => {
    console.error("Error:", err);
  });
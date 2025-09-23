async function doSomethingAsyncAwait() {
  try {
   
    const randomNum = Math.random();
    const result = await new Promise((resolve, reject) => {
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

    console.log("Result:", result);
  } catch (err) {
    console.error("Error:", err);
  }
}

doSomethingAsyncAwait();
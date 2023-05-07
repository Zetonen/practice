const promise = new Promise((resolte, reject) => {
  const canFulfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulfill) {
      resolte("Ok");
    }

    reject("not ok");
  }, 2000);
});

// promise.then(onFulfilled, onRejected);

function onFulfilled(result) {
  console.log(result);
}

function onRejected(error) {
  console.log(error);
}

// ланцюжок промісів
promise
  .then(onFulfilled)
  .then((x) => {
    console.log(x);

    // throw new Error("помилка у другому then");

    return 10;
  })
  .then((y) => console.log(y))
  .catch((error) => console.log(error))
  .finally(() => console.log("виконаюсь у будь якому випадку"));
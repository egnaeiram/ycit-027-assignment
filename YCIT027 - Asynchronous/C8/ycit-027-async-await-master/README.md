# Async - Await

In JavaScript, there is an alternate way to write promises. It is called async/await. It is a new way to write promises instead of using .then() and .catch().

Take the following code as an example:

```js
myPromise.then(successCallback).catch(errorCallback);
```

This is the same as:

```js
try {
    let result = await myPromise;
    successCallback(result);
} catch (error) {
    errorCallback(error);
}
```

Now, it may be more lines of code, but some people find this easier to read.

There is no real advantage to using async/await over .then() and .catch(). It is just a different way to write the same thing.

We call async/await "syntax sugar" because it is just a different way to write the same thing.

Personally, sometimes I use the async/await syntax and sometimes I use .then() and .catch(). Sometimes, I find it faster to just use .then() and .catch(). Sometimes I prefer the "procedural style" of async/await.

🤷‍♂️

One requirement of using async/await is that you can only use the await keyword inside of an async function. You can't use await outside of an async function.

Taking the above example, we can rewrite it like this:

```js
async function myFunction() {
    try {
        let result = await myPromise;
        successCallback(result);
    } catch (error) {
        errorCallback(error);
    }
}
```

If you don't put async in front of the function, then you can't use await inside of it.

## Async Functions

To use async/await, you must create an async function. An async function is a function that is declared with the async keyword.

```js
async function myFunction() {
    // ...
}
```

Async functions always return a promise. If the function returns a value, the promise will be resolved with that value. If the function throws an exception, the promise will be rejected with that exception.

```js
async function myFunction() {
    return 5;
}

myFunction().then((result) => {
    console.log(result); // 5
});
```

```js
async function myFunction() {
    throw new Error("Oops!");
}

myFunction().catch((error) => {
    console.log(error.message); // "Oops!"
});
```

// writing a testing framework
/*

Let's improve our error messages a bit, create a function
called `test` which can be given a title and a callback.

Then add a try/catch so you can log the title with
a note of success or error.

Then wrap each of your tests in a `test` function.

This also means that we can run all the tests even
if one of them fails!

Example of test function
test(title, () => {
  // arrange
  // act
  // assert
}

Then run this code with `node 3.todo`

> Make sure you're in the right directory!

 */

const { sum, subtract } = require('./math');

function test(title, callback) {
  try {
    callback();
    console.log(`✔ ${title}`);
  } catch (error) {
    console.error(`❌ ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (expected !== actual) {
        throw new Error(`The result ${actual} is not equal to the ${expected}`);
      }
    },
  };
}

test('should check the result of sum', () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

# Variables

> What are variables used for? variables are used as containers for storing data values Why are they important? They are important because you can hold a date a value to be manipulated in your code.

## Requirements

1. Create the following variables:
    ```js
    export var message = 'hello';

    export let greeting = 'Yo!';

    export const saying = 'What up';
    ```
2. Can you assign a new value to message? (Assign 'world')
-yes but they are not equal in the test
3. Can you assign a new value to greeting? (Assign 'Hello!')
-yes but they are not equal in the test
4. Can you assign a new value to const? (Assign 'Booyah')
-no because it is constant, but the tests are still unequal.


## Observations

1. What it the difference between var and let? 
-var defines a avariable to an entire function regardless of block scope, while let allows the variabler to be declared with a limited scope to a block, statement or expression
2. What is the difference between let and const?
-let fan be updated or changed, while const can not be updated although the properties can change, just not reassigned entirely.
3. When should you use let versus const?
-Let should be used when the vaiable is made to ber updated and changed, const should be used when you don't wnat the variable to ever change. This protects the vaiable from reassignment. 
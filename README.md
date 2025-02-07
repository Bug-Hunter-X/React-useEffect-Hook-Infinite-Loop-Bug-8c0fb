# React useEffect Hook Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: an infinite loop caused by a missing dependency.

## Bug Description
The `useEffect` hook is designed to perform side effects after every render. However, if a dependency is missing from the dependency array, the effect will run repeatedly, leading to an infinite loop.

## Bug Reproduction
The `bug.js` file contains code with this bug. When you run this code, you will see that the console log infinitely prints 'Count' and 'Cleanup'.

## Solution
The `bugSolution.js` file contains the corrected code. By adding `count` to the dependency array, the effect only runs when the value of `count` changes.

## How to run
1. Clone this repo.
2. Navigate to the directory.
3. Run  `npm install`
4. Run `npm start`

# Node.js Server Memory Leak
This repository demonstrates a common Node.js memory leak scenario and its solution.

## Bug
The `bug.js` file contains a simple HTTP server that doesn't properly handle large request bodies.  The `data` event listener accumulates chunks into an array without a size limit, leading to potential memory exhaustion under high load.

## Solution
The `bugSolution.js` file shows how to fix this memory leak by implementing a limit on the maximum request body size using `req.on('data', ...)` and  `req.on('error', ...)` . If the size exceeds this limit it will send back a 413 error code.
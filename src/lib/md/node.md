---

# Node.js

---

[`Node.js`](https://nodejs.org/) is a free and open-source, cross-platform JavaScript runtime environment created by Ryan Dahl and maintained by the Node.js Foundation, now part of the OpenJS Foundation. Node.js is designed to execute JavaScript code server-side and is built on the V8 JavaScript engine, which is used in Google Chrome. It allows developers to use JavaScript to write server-side scripts and develop scalable network applications.

Node.js uses an event-driven, non-blocking I/O model, which makes it efficient and suitable for real-time applications that require a lot of I/O operations.

The runtime is written in JavaScript, C, and C++ and is licensed under the MIT License, with its source code hosted on GitHub.

<br/>

Node.js is:

- **Event-Driven**: Non-blocking, asynchronous architecture makes it ideal for handling multiple requests simultaneously.
- **Scalable**: Suitable for building scalable network applications due to its lightweight and efficient nature.
- **Full-Stack**: Use JavaScript on both the front end and the back end, enabling full-stack development with a single language.

<br/>

## Example

```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
```

> Node.js is a free and open-source, cross-platform JavaScript runtime environment created by Ryan Dahl and maintained by the Node.js Foundation.
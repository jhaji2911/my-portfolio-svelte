# React.js

---

[`React.js`](https://reactjs.org/) is a free and open-source front end JavaScript library created by Jordan Walke and maintained by Facebook and a community of individual developers and companies. React.js is used for building user interfaces, specifically single-page applications, by enabling developers to create reusable UI components. React.js operates using a virtual DOM, which helps to optimize updates and rendering by efficiently determining what changes need to be made to the actual DOM.

React.js is often used in conjunction with other libraries for state management (like Redux) or routing (like React Router) to build full-featured applications.

The library is written in JavaScript and licensed under the MIT License, with its source code hosted on GitHub.

<br/>

React.js is:

- **Component-Based**: Build encapsulated components that manage their own state, then compose them to make complex UIs.
- **Declarative**: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
- **Learn Once, Write Anywhere**: Develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.

<br/>

## Example

```jsx
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Counter;
```

> React.js is a free and open-source front end JavaScript library created by Jordan Walke and maintained by Facebook and a community of individual developers and companies.

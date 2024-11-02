import{A as a}from"./UIcon.049d5bfe.js";const p=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`,u=`# React.js

---

[\`React.js\`](https://reactjs.org/) is a free and open-source front end JavaScript library created by Jordan Walke and maintained by Facebook and a community of individual developers and companies. React.js is used for building user interfaces, specifically single-page applications, by enabling developers to create reusable UI components. React.js operates using a virtual DOM, which helps to optimize updates and rendering by efficiently determining what changes need to be made to the actual DOM.

React.js is often used in conjunction with other libraries for state management (like Redux) or routing (like React Router) to build full-featured applications.

The library is written in JavaScript and licensed under the MIT License, with its source code hosted on GitHub.

<br/>

React.js is:

- **Component-Based**: Build encapsulated components that manage their own state, then compose them to make complex UIs.
- **Declarative**: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
- **Learn Once, Write Anywhere**: Develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.

<br/>

## Example

\`\`\`jsx
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
\`\`\`

> React.js is a free and open-source front end JavaScript library created by Jordan Walke and maintained by Facebook and a community of individual developers and companies.
`,g=`# React Native

---

[\`React Native\`](https://reactnative.dev/) is a free and open-source mobile application framework developed by Jordan Walke and maintained by Meta (formerly Facebook) along with a large developer community. React Native enables developers to build mobile applications for iOS, Android, and other platforms using JavaScript and React, with a single codebase. This approach allows developers to build high-performance mobile apps that use native platform components, ensuring smooth and responsive user experiences.

React Native is commonly used with additional libraries for state management (such as Redux or Zustand) and navigation (like React Navigation) to create complete, full-featured applications.

The framework is licensed under the MIT License and is available on GitHub.

<br/>

React Native is:

- **Cross-Platform**: Code written in React Native can be reused across different platforms, including iOS, Android, and the web (using additional tools).
- **Component-Based**: React Native shares React’s component-based approach, allowing encapsulated components to build complex UIs tailored for mobile.
- **Learn Once, Write Anywhere**: React Native is designed to maximize code reuse, with minimal native code needed for advanced features, making it easy for React developers to transition into mobile app development.

<br/>

## Example

\`\`\`jsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>You clicked {count} times</Text>
            <Button 
                title="Click me" 
                onPress={() => setCount(count + 1)} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default Counter;`,m=`---

# Vue.js

---

[\`Vue.js\`](https://vuejs.org/) is a free and open-source front end JavaScript framework created by Evan You and maintained by him along with the Vue core team. Vue.js is used for building user interfaces and single-page applications by extending basic HTML with a declarative syntax and reactive data binding. It allows developers to build modern, interactive web applications with ease.

Vue.js employs a virtual DOM for efficient updates and provides a variety of tools and plugins for routing, state management, and building large-scale applications.

The framework is written in JavaScript and is licensed under the MIT License, with its source code available on GitHub.

<br/>

Vue.js is:

- **Reactive**: Declarative rendering and two-way data binding make it easier to keep your UI in sync with your application state.
- **Component-Based**: Create self-contained, reusable components to build large applications efficiently.
- **Flexible**: Vue is designed to be incrementally adoptable. The core library focuses on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.

<br/>

## Example

\`\`\`html
<div id="app">
    <p>{{ message }}</p>
    <button @click="increment">Count</button>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            count: 0,
            message: 'Count: 0'
        },
        methods: {
            increment() {
                this.count++;
                this.message = \`Count: \${this.count}\`;
            }
        }
    });
<\/script>
\`\`\`

> Vue.js is a free and open-source front end JavaScript framework created by Evan You and maintained by him along with the Vue core team.`,h=`---

# Node.js

---

[\`Node.js\`](https://nodejs.org/) is a free and open-source, cross-platform JavaScript runtime environment created by Ryan Dahl and maintained by the Node.js Foundation, now part of the OpenJS Foundation. Node.js is designed to execute JavaScript code server-side and is built on the V8 JavaScript engine, which is used in Google Chrome. It allows developers to use JavaScript to write server-side scripts and develop scalable network applications.

Node.js uses an event-driven, non-blocking I/O model, which makes it efficient and suitable for real-time applications that require a lot of I/O operations.

The runtime is written in JavaScript, C, and C++ and is licensed under the MIT License, with its source code hosted on GitHub.

<br/>

Node.js is:

- **Event-Driven**: Non-blocking, asynchronous architecture makes it ideal for handling multiple requests simultaneously.
- **Scalable**: Suitable for building scalable network applications due to its lightweight and efficient nature.
- **Full-Stack**: Use JavaScript on both the front end and the back end, enabling full-stack development with a single language.

<br/>

## Example

\`\`\`js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\\n');
});

server.listen(port, hostname, () => {
    console.log(\`Server running at http://\${hostname}:\${port}/\`);
});
\`\`\`

> Node.js is a free and open-source, cross-platform JavaScript runtime environment created by Ryan Dahl and maintained by the Node.js Foundation.`,b=`---

# Rust

---

[\`Rust\`](https://www.rust-lang.org/) is a free and open-source systems programming language designed by Graydon Hoare and developed by Mozilla Research. Rust focuses on performance, safety, and concurrency, making it suitable for system-level programming where low-level memory control is required. Rust is known for its "zero-cost abstractions," meaning that higher-level features do not incur any runtime overhead.

Rust's ownership system ensures memory safety without needing a garbage collector, making it a popular choice for performance-critical applications and ensuring safe concurrency.

The language is written in Rust itself, with parts in C and C++, and is licensed under the MIT License and Apache License 2.0, with its source code hosted on GitHub.

<br/>

Rust is:

- **Safe**: Guarantees memory safety by preventing null pointer dereferencing and buffer overflows.
- **Concurrent**: Provides efficient and safe concurrency with its ownership system and message-passing mechanisms.
- **Fast**: Ensures high performance with zero-cost abstractions and low-level control over memory.

<br/>

## Example

\`\`\`rust
fn main() {
    let mut count = 0;

    for _ in 0..10 {
        count += 1;
        println!("Count: {}", count);
    }
}
\`\`\`

> Rust is a free and open-source systems programming language designed by Graydon Hoare and developed by Mozilla Research.`,y=`# JavaScript (JS)

---

[\`JavaScript (JS)\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript) is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is one of the core technologies of the World Wide Web, alongside HTML and CSS, and enables interactive web pages. JavaScript is versatile, used for both client-side and server-side development, and is supported by all modern web browsers without the need for plugins.

JavaScript is dynamically typed, prototype-based, and supports object-oriented, imperative, and functional programming styles.

The language is standardized in the ECMAScript language specification and maintained by Ecma International.

<br/>

JavaScript is:

- **Versatile**: Used for web development, server-side scripting, game development, and more.
- **Dynamic**: Supports dynamic typing and run-time object construction.
- **Popular**: Widely used and supported by a large community with extensive libraries and frameworks.

<br/>

## Example

\`\`\`js
function greet(name) {
    return \`Hello, \${name}!\`;
}

console.log(greet('World')); // Output: Hello, World!
\`\`\`

> JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.`,f=`---

# TypeScript (TS)

---

[\`TypeScript (TS)\`](https://www.typescriptlang.org/) is a free and open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, adding static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript, allowing TypeScript code to run anywhere JavaScript runs.

TypeScript enhances JavaScript by adding optional static types, classes, and interfaces, providing early error detection and robust code refactoring capabilities.

The language is open-source and available under the Apache License 2.0, with its source code hosted on GitHub.

<br/>

TypeScript is:

- **Typed**: Provides optional static typing, enhancing code quality and reducing runtime errors.
- **Scalable**: Suitable for large codebases and complex applications.
- **Compatible**: Transpiles to JavaScript, making it compatible with existing JavaScript code and frameworks.

<br/>

## Example

\`\`\`ts
function greet(name: string): string {
    return \`Hello, \${name}!\`;
}

console.log(greet('World')); // Output: Hello, World!
\`\`\`

> TypeScript is a free and open-source programming language developed and maintained by Microsoft.`,v=`---

# CSS (Cascading Style Sheets)

---

[\`CSS (Cascading Style Sheets)\`](https://developer.mozilla.org/en-US/docs/Web/CSS) is a style sheet language used for describing the presentation of a document written in HTML or XML. CSS defines how elements should be rendered on screen, on paper, or in other media. It is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

CSS enables the separation of content from presentation, improving content accessibility, and providing more flexibility and control in the specification of presentation characteristics.

The language is maintained by the World Wide Web Consortium (W3C).

<br/>

CSS is:

- **Declarative**: Use CSS rules to describe how elements should be styled.
- **Separable**: Allows separation of content from presentation, making it easier to maintain and update.
- **Responsive**: Enables the creation of responsive web designs that adapt to different screen sizes and devices.

<br/>

## Example

\`\`\`css
body {
    background-color: lightblue;
}

h1 {
    color: navy;
    margin-left: 20px;
}
\`\`\`

> CSS is a style sheet language used for describing the presentation of a document written in HTML or XML.`,S=`---

# Sass (Syntactically Awesome Stylesheets)

---

[\`Sass (Syntactically Awesome Stylesheets)\`](https://sass-lang.com/) is a preprocessor scripting language that is interpreted or compiled into CSS. SassScript is the scripting language itself. Sass extends CSS by introducing features such as variables, nested rules, mixins, and functions, which help keep stylesheets DRY (Don't Repeat Yourself) and easier to maintain.

Sass can be written in two syntaxes: the indented syntax (Sass) and the SCSS syntax, which is a superset of CSS3.

The language is open-source and available under the MIT License, with its source code hosted on GitHub.

<br/>

Sass is:

- **Extensible**: Adds features like variables, nested rules, and mixins to standard CSS.
- **Maintainable**: Helps keep stylesheets DRY (Don't Repeat Yourself) and easier to manage.
- **Compatible**: SCSS syntax is a superset of CSS, allowing for seamless integration with existing CSS code.

<br/>

## Example

\`\`\`scss
$primary-color: lightblue;

body {
    background-color: $primary-color;
}

h1 {
    color: navy;
    margin-left: 20px;
}
\`\`\`

> Sass is a preprocessor scripting language that is interpreted or compiled into CSS.`,w=`---

# HTML (HyperText Markup Language)

---

[\`HTML (HyperText Markup Language)\`](https://developer.mozilla.org/en-US/docs/Web/HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as CSS and JavaScript. HTML elements are the building blocks of web pages, and HTML provides the structure of a web page, while CSS and JavaScript provide the presentation and behavior, respectively.

HTML elements are represented by tags, and these tags label pieces of content such as "heading," "paragraph," "table," and so on.

The language is maintained by the World Wide Web Consortium (W3C) and the Web Hypertext Application Technology Working Group (WHATWG).

<br/>

HTML is:

- **Structured**: Provides the structural foundation for web pages with elements and tags.
- **Hypertext**: Supports hyperlinks, enabling navigation between documents and resources.
- **Universal**: Understood by all web browsers, making it the universal language of the web.

<br/>

## Example

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a simple HTML document.</p>
</body>
</html>
\`\`\`

> HTML is the standard markup language for documents designed to be displayed in a web browser.`;function k(e,...t){const s=Object.assign({},e);return Object.keys(s).forEach(o=>{t.includes(o)&&delete s[o]}),s}const n=e=>e,C=[n({name:"Programming Languages",slug:"pro-lang"}),n({name:"Frameworks",slug:"framework"}),n({name:"Libraries",slug:"library"}),n({name:"Languages",slug:"lang"}),n({name:"Databases",slug:"db"}),n({name:"ORMs",slug:"orm"}),n({name:"DevOps",slug:"devops"}),n({name:"Testing",slug:"test"}),n({name:"Dev Tools",slug:"devtools"}),n({name:"Markup & Style",slug:"markup-style"}),n({name:"Design",slug:"design"}),n({name:"Soft Skills",slug:"soft"})],i=e=>{const t=k(e,"category");return e.category&&(t.category=C.find(s=>s.slug===e.category)),t},c=[i({slug:"js",color:"yellow",description:y,logo:a.JavaScript,name:"Javascript",category:"pro-lang"}),i({slug:"ts",color:"blue",description:f,logo:a.TypeScript,name:"Typescript",category:"pro-lang"}),i({slug:"css",color:"blue",description:v,logo:a.CSS,name:"CSS",category:"markup-style"}),i({slug:"html",color:"orange",description:w,logo:a.HTML,name:"HTML",category:"markup-style"}),i({slug:"sass",color:"pink",description:S,logo:a.Sass,name:"Sass",category:"markup-style"}),i({slug:"nodejs",color:"green",description:h,logo:a.NodeJs,name:"Node JS",category:"library"}),i({slug:"reactjs",color:"cyan",description:u,logo:a.ReactJs,name:"React Js",category:"library"}),i({slug:"react-native",color:"cyan",description:g,logo:a.ReactNative,name:"React Native",category:"framework"}),i({slug:"vue",color:"green",description:m,logo:a.VueJs,name:"VueJs",category:"library"}),i({slug:"svelte",color:"orange",description:p,logo:a.Svelte,name:"Svelte",category:"library"}),i({slug:"rust",color:"orange",description:b,logo:a.Rust,name:"Rust",category:"lang"})],R="Skills",x=(...e)=>c.filter(t=>e.includes(t.slug)),M=e=>{const t=[],s=[];return c.forEach(o=>{if(e.trim()&&!o.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!o.category){console.log(o.category),s.push(o);return}let r=t.find(d=>{var l;return d.category.slug===((l=o.category)==null?void 0:l.slug)});r||(r={items:[],category:o.category},t.push(r)),r.items.push(o)}),s.length!==0&&t.push({category:{name:"Others",slug:"others"},items:s}),t};export{M as a,x as g,c as i,R as t};

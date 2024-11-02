---

# Vue.js

---

[`Vue.js`](https://vuejs.org/) is a free and open-source front end JavaScript framework created by Evan You and maintained by him along with the Vue core team. Vue.js is used for building user interfaces and single-page applications by extending basic HTML with a declarative syntax and reactive data binding. It allows developers to build modern, interactive web applications with ease.

Vue.js employs a virtual DOM for efficient updates and provides a variety of tools and plugins for routing, state management, and building large-scale applications.

The framework is written in JavaScript and is licensed under the MIT License, with its source code available on GitHub.

<br/>

Vue.js is:

- **Reactive**: Declarative rendering and two-way data binding make it easier to keep your UI in sync with your application state.
- **Component-Based**: Create self-contained, reusable components to build large applications efficiently.
- **Flexible**: Vue is designed to be incrementally adoptable. The core library focuses on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.

<br/>

## Example

```html
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
                this.message = `Count: ${this.count}`;
            }
        }
    });
</script>
```

> Vue.js is a free and open-source front end JavaScript framework created by Evan You and maintained by him along with the Vue core team.
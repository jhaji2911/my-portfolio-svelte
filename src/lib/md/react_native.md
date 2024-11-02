# React Native

---

[`React Native`](https://reactnative.dev/) is a free and open-source mobile application framework developed by Jordan Walke and maintained by Meta (formerly Facebook) along with a large developer community. React Native enables developers to build mobile applications for iOS, Android, and other platforms using JavaScript and React, with a single codebase. This approach allows developers to build high-performance mobile apps that use native platform components, ensuring smooth and responsive user experiences.

React Native is commonly used with additional libraries for state management (such as Redux or Zustand) and navigation (like React Navigation) to create complete, full-featured applications.

The framework is licensed under the MIT License and is available on GitHub.

<br/>

React Native is:

- **Cross-Platform**: Code written in React Native can be reused across different platforms, including iOS, Android, and the web (using additional tools).
- **Component-Based**: React Native shares React’s component-based approach, allowing encapsulated components to build complex UIs tailored for mobile.
- **Learn Once, Write Anywhere**: React Native is designed to maximize code reuse, with minimal native code needed for advanced features, making it easy for React developers to transition into mobile app development.

<br/>

## Example

```jsx
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

export default Counter;
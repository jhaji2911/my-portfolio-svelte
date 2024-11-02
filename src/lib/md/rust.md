---

# Rust

---

[`Rust`](https://www.rust-lang.org/) is a free and open-source systems programming language designed by Graydon Hoare and developed by Mozilla Research. Rust focuses on performance, safety, and concurrency, making it suitable for system-level programming where low-level memory control is required. Rust is known for its "zero-cost abstractions," meaning that higher-level features do not incur any runtime overhead.

Rust's ownership system ensures memory safety without needing a garbage collector, making it a popular choice for performance-critical applications and ensuring safe concurrency.

The language is written in Rust itself, with parts in C and C++, and is licensed under the MIT License and Apache License 2.0, with its source code hosted on GitHub.

<br/>

Rust is:

- **Safe**: Guarantees memory safety by preventing null pointer dereferencing and buffer overflows.
- **Concurrent**: Provides efficient and safe concurrency with its ownership system and message-passing mechanisms.
- **Fast**: Ensures high performance with zero-cost abstractions and low-level control over memory.

<br/>

## Example

```rust
fn main() {
    let mut count = 0;

    for _ in 0..10 {
        count += 1;
        println!("Count: {}", count);
    }
}
```

> Rust is a free and open-source systems programming language designed by Graydon Hoare and developed by Mozilla Research.
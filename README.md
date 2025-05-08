# TypeScript Basics

## 1.	What are some differences between interfaces and types in TypeScript?

In TypeScript, both `interface` and `type` are powerful tools used to define the shape of data. While they often seem interchangeable, there are subtle differences that can determine which one to use in specific scenarios.

- **Interfaces** are designed to be extendable. You can extend an interface using `extends`, and you can also merge interfaces by declaring them multiple times.
- **Types**, on the other hand, are more **strict** and cannot be merged.

### For Example:

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

// Merged: { name: string; age: number; }
```

- **Type aliases** are better suited for union and intersection types.

```ts
type Status = 'success' | 'error';
type UserInfo = { name: string } & { age: number };
```

- Use **interfaces** for object shapes, especially in public APIs and libraries.
- Use **types** for complex type compositions or when working with primitives, tuples, or union types.

**Lastly,** While both are valid and powerful, choosing between `interface` and `type` depends on the context. Interfaces work best for object-oriented designs, whereas types shine with advanced type manipulation.

---

## 2. What is the use of the keyof keyword in TypeScript? Provide an example.

The `keyof` keyword in TypeScript is used to extract the keys of a given object type as a union of string literal types. This is especially useful for creating dynamic and type-safe utilities.

### For Example:

```ts
type Person = {
  name: string;
  age: number;
};

// keyof Person is "name" | "age"
type PersonKeys = keyof Person;
```
A practical use of **`keyof`** is to create generic functions that access object properties in a safe way.

```ts
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: 'Alice', age: 25 };
const name = getValue(person, 'name'); // "Alice"
```

Above all,  we can say that ,The `keyof` keyword helps build flexible and safe utility types and functions, reducing the chances of runtime errors due to invalid key access.

---

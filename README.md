# Anti-cheat frontend
Version 0.3.3    
Frontend template for an anti-cheat ban database Unfinished)     

Made as part of the [Quack](https://github.com/JonathanBerkeley/Quack) project

# Project styleguide

### General
- No semicolon termination
- ES imports
- Newline between functions / classes / logical blocks
- Foreign imports seperated from local imports
- 4 spaces indentation, 2 spaces indentation for .css
- ```// Space at beginning of line comment```

### Naming    
```js
const CONSTANT_GLOBAL    
static CONSTANT_STATIC    

var localVariable    
const localConst    
let blockVariable    
let #_privateVariable    

let longLiteralNumber = 1_000_000    
```

### Functions
```js
// File global
function PascalCase(args) {
    // Code
}

// Otherwise
const functionPtr = () => {
    // Code
}
```

### Classes
- Prefer static over singleton    
- Object oriented style    
```js
class PascalCase {
    // Code
}
```

# jsonjwt

Effortlessly serve JSON files protected by JWT.

## Installation

```bash
npm install --save jsonjwt
```

## API

### `jsonjwt.stringify(object, secret)`

### `jsonjwt.parse(token, [secret])`

- If no secret is provided, it will try and fetch `token-secret` from LocalStorage.

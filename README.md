<div align="center">
  <img src="https://svgl.app/library/vitejs.svg" width="128">
  <img src="https://svgl.app/library/vitest.svg" width="128">
  <img src="https://testing-library.com/img/octopus-128x128.png">
</div>

<div align="center">
  <h3>Vitest Template Repository</h3>
</div>

---

## Welcome to this humble GitHub repository :smile:

If you are looking for an easy way to start a Vite project and include testing, here you will find a template to get you started!
Feel free to use and modify it as you like, and remember, if you found it helpful, a star would be appreciated :star:

Good luck with your new adventure!

### Dependencies used:

- [Vitest](https://vitest.dev/)
- [@testing-library](https://testing-library.com/)
- [jsdom](https://www.npmjs.com/package/jsdom)

### Required files

- [`vitest.config.ts`](./vitest.config.ts): With this file we will define the configuration of Vitest for our project, as well as other aspects to highlight such as coverage, you can add new configurations as needed.
- [`vitest.setup.ts`](./vitest.setup.ts): Here we declare the initial dependencies to be loaded by Vitest, e.g. `@testing-library/jest-dom/vitest`

### Important things

This template has a configuration to make Vitest functionalities global to the project, so it will work as with Jest, but, the @testing-library/react functionalities will have to be imported manually by the dev.

This global configuration can be found in the following files:

- [vitest.config.ts](./vitest.config.ts):

```
test: {
  ...
  globals: true,
}
```

- [tsconfig.app.json](./tsconfig.app.json):

```
"compilerOptions": {
  ...
  "types": ["vitest/globals"]
}
```

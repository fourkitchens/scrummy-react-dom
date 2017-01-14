# scrummy-react-dom

[![Four Kitchens](https://img.shields.io/badge/4K-Four%20Kitchens-35AA4E.svg?style=flat-square)](https://fourkitchens.com/)
[![Travis](https://img.shields.io/travis/fourkitchens/scrummy-react-dom.svg?style=flat-square)](https://travis-ci.org/fourkitchens/scrummy-react-dom/)
[![Codecov](https://img.shields.io/codecov/c/github/fourkitchens/scrummy-react-dom.svg?style=flat-square)](https://codecov.io/gh/fourkitchens/scrummy-react-dom)
[![Code Climate](https://img.shields.io/codeclimate/github/fourkitchens/scrummy-react-dom.svg?style=flat-square)](https://codeclimate.com/github/fourkitchens/scrummy-react-dom)
[![David Dependency Management](https://img.shields.io/david/fourkitchens/scrummy-react-dom.svg?style=flat-square)](https://david-dm.org/fourkitchens/scrummy-react-dom)
[![David Dependency Management (dev)](https://img.shields.io/david/dev/fourkitchens/scrummy-react-dom.svg?style=flat-square)](https://david-dm.org/dev/fourkitchens/scrummy-react-dom#info=devDependencies&view=table)

## Contributors

[![Four Kitchens](https://avatars.githubusercontent.com/u/348885?s=130)](https://github.com/fourkitchens) | [![Taylor](https://avatars.githubusercontent.com/u/1486573?s=130)](https://github.com/tsmith512) | [![Flip](https://avatars.githubusercontent.com/u/1306968?s=130)](https://github.com/flipactual) | [![Luke](https://avatars.githubusercontent.com/u/1127238?s=130)](https://github.com/infiniteluke)
--- | --- | --- | ---
[Four Kitchens](https://github.com/fourkitchens) | [Taylor](https://github.com/tsmith512) | [Flip](https://github.com/flipactual) | [Luke](https://github.com/infiniteluke)
## Setup

* `yarn` For faster, deterministic, dependency management, install [yarn](https://yarnpkg.com/en/docs/install). For more information on how to use yarn see the [docs](https://yarnpkg.com/en/docs/cli/).
* `npm install` is not necessary if you use `yarn` but it also works.

## Storybook

[Storybook](https://github.com/kadirahq/react-storybook) allows one to develop/style components in isolation.
Each component directory contains a respective `story.js` file.

### Usage
* `npm run storybook`
* Visit http://localhost:6006
* Develop/Style components as normal. Changes will be hot reloaded.

## Styles

Each component directory contains a respective `<Component>.scss` file. `src/scss/main.scss` contains all component imports along with other global imports.

## Scripts

### `build` – build the app

```sh
npm run build
```

### `start` – start a server for the developing the app

```sh
npm run start
```

### `test` – test the app

```sh
npm run test
```

### `test-watch` – test the app and re-run on save

```sh
npm run test-watch
```

### `view-coverage` – view test coverage

```sh
npm run view-coverage
```

### `check-coverage` – check that test coverage is :100:

```sh
npm run check-coverage
```

### `watch-coverage` – check test coverage as you write tests

```sh
npm run watch-coverage
```

### `lint-code` – lint the codebase

```sh
npm run lint-code
```

### `lint-writing` – lint docs for grammar

```sh
npm run lint-writing
```

### `coverage` – generate test coverage

```sh
npm run coverage
```

### `quality` – check code quality

```sh
npm run quality
```

### `write-readme` – generate README

```sh
npm run write-readme
```


### `storybook` – run storybook and hot reload changes

```sh
npm run storybook
```

### `storybook-build` – build storybook as static site

```sh
npm run storybook-build
```

## Local Backend Server Setup:

### Note:
* The default is to connect to the Herokuapp at ws://scrummy-server.herokuapp.com.

### Scrummy Server:
* Copy `config/example.local.yaml` to `config/local.yaml` to connect to the [Scrummy Server](https://github.com/fourkitchens/scrummy-server).
* In the Scrummy Server repo change `config/default.yml` to have a port line that reads `port: 8081`.
* Open two terminal windows and start up both dev servers with `npm run start` in the projects root directories.
* Go to: http://localhost:8080/webpack-dev-server/
* Play Scrummy.

## License

MIT @ [Four Kitchens](https://github.com/fourkitchens)

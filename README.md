# ![css-init](https://raw.githubusercontent.com/sir-sharkey/css-init/main/css-init.png)

## ♿️ A minimal, accessible, & unopinionated CSS reset that correctly accounts for [HTML5 elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

[![License: MIT](https://img.shields.io/badge/License-MIT-blueviolet.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/css-init)](https://www.npmjs.com/package/css-init)
[![npm weekly downloads](https://img.shields.io/npm/dw/css-init)](https://www.npmjs.com/package/css-init)

## ⚙️ Features

### 👌 Minimal

- No superfluous or redundant styles; nothing is included without an explanation in comments.
- Code copied from other resets and browser default stylesheets is audited.
- Main file is minified; only 1.2kb total size uncompressed.

### ♿️ Accessible

- Does not tamper with the natural accessibility of semantic HTML.
- Does not remove, or edit in any way, default browser focus state styles.
  - ⚠️ You should _never_ remove/hide/suppress the default `:focus` outline without adding custom styles in place of it!
- Sets `font-size` to `100%` and includes a note on why this is important.
- Sets default `line-height` on `body` and includes a note (and [link](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height#accessibility_concerns)) on why this is important.
- Ensures that `[hidden]` attribute styles are honored.
- Correctly hides elements using `display: none`, as this also removes them from the accessibility tree.
- Does not prevent a user from zooming.

### 🤫 Unopinionated

- Intended to reset the styles for all [HTML Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), **NOT** to add a layer of opinionated/default styles.
- Meant to have a near-blank-slate effect.
  - 📝 **NOTE:** There are a few exceptions included that are restyled after resetting all elements.

### 📱 Modern

- Correctly resets new HTML5 elements for custom styling, like `<button>` and `<select>`.
- Correctly styles multimedia elements to reduce the likelihood of unintended side-scroll.
- Ensures a `pointer` cursor shows on all appropriate interactive elements.
- Includes modern browser support (_see below_).

## 🏗 Browser Support

The styles in this project are compiled using rules that support the last 2 versions, and any version with coverage greater than 1%, of all modern browsers supported by [Browserslist](https://github.com/browserslist/browserslist).

```text
> 1%
last 2 versions
```

## 😞 Why

After years of creating a custom `_reset.scss` file on top of [Reset CSS](https://meyerweb.com/eric/tools/css/reset/) and [Normalize](https://necolas.github.io/normalize.css/), I decided to research what other options are available... surely there has to be a minimal, accessible, unopinionated, modern alternative? And here enters my disappointment - while there are some notable newer options, I couldn't find anything that ticked all the above boxes. So here is my best attempt at creating a stylesheet that does so.

## ⤵️ Install

[![css-init NPM package](https://nodei.co/npm/css-init.png?compact=true)](https://nodei.co/npm/css-init/)

With [NPM](http://npmjs.com):

```sh
$ npm i css-init
```

With [Yarn](https://yarnpkg.com):

```sh
$ yarn add css-init
```

### Download

- [Expanded css stylesheet](https://github.com/sir-sharkey/css-init/blob/main/dist/init.css)
- [Minified css stylesheet](https://github.com/sir-sharkey/css-init/blob/main/dist/init.min.css)

## 🛠 Usage

> 📝 **NOTE:** Replace "..node-modules" below with the path to your `/node_modules/` directory, or in your desired location.

HTML:

```html
<link rel="stylesheet" href="..node-modules/css-init/dist/init.min.css">
```

SCSS:

```scss
@import '..node-modules/css-init/src/init.scss';
```

CSS:

```css
@import '..node-modules/css-init/dist/init.min.css';
```

Via [webpack](https://webpack.js.org/) and [css-loader](https://github.com/webpack-contrib/css-loader):

```js
import 'css-init';
```

## 💣 Testing

There is an included [`elements.html`](https://css-init.com/elements.html) file that acts as an example/test page. You can load this file locally in any browser to see how all HTML elements will look after the `css-init` styles are loaded.

## 👥 GitHub

- [https://github.com/sir-sharkey/css-init](https://github.com/sir-sharkey/css-init)

## ✏️ Contributing

This project is open-source, and can only get better the more people use it and contribute to it (code contributions and issues/bugs/ideas are all encouraged).

> ❤️ Feedback is welcome!

To submit any issues, bugs, or ideas for improvement please [open a new issue](https://github.com/sir-sharkey/css-init/issues/new) on GitHub.

## 📄 License

MIT

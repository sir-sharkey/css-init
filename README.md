# css-init

# A modern CSS reset/normalization.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/v/css-init?color=%23cb0000)](https://www.npmjs.com/package/scss-reset)
[![npm](https://img.shields.io/npm/dw/css-init)](https://www.npmjs.com/package/scss-reset)

A minimal, unopinionated, and accessible CSS reset/normalization that correctly accounts for [HTML5 elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

## ⚙️ Features

### 👌 Minimal

Only the minimal rules necessary are included, and all rules and declarations are thoroughly explained in comments; the rules included are the bare minimum required to correctly reset styles for all appropriate [HTML Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) in a manner that does not tamper with the natural accessibility of semantic HTML in an unaltered state.

- Nothing included without an explanation or a reason.
- Legacy conventions in other "resets" and "normalizations" audited and edited/removed.
- Deprecated elements removed.
- Main file is minified.

### 🤫 Unopinionated

- The included rules are _only_ intended to truly "reset" the styles for all appropriate [HTML Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), **NOT** to also add a layer of default styles on top of the reset.
- These styles are meant to have a true blank slate effect.
- Meant to be used by developers in projects where themes/default styles are being added on top of the reset.
- Avoids necessitating an additional complementary stylesheet in order to remove opinionated styles added after using a package like [Normalize](https://necolas.github.io/normalize.css/).

### ♿️ Accessible

- Accessibility-In-Mind: accessibility was a main focus when creating this package.
- Does not remove, or mess with in any way, the default focus state styles!!
  - ⚠️ You should _never_ remove/hide/suppress the default focus outline without creating a custom one as well?
- Sets `font-size` to `100%` and includes note on why this is important.
- Sets default `line-height` on `body` with accessibility in mind.
- Ensures that `[hidden]` attribute styles are honored.
- Ensures that elements that are hidden are done so using `display: none`, as this also removes them from the accessibility tree.
- Doesn't mess with the user's ability to zoom.
- In the interest of also being minimal and unopinionated, there are no expendable or superfluos styles added that could potentially have irrevocable unintended affects on a site's accessibility.

### 📱 Modern

- Includes styles for all appropriate [HTML Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), including elements left out in Eric Meyer's OG [Reset CSS](https://meyerweb.com/eric/tools/css/reset/).
- Correctly resets new HTML5 elements for custom styling, like `<button>` and `<select>`.
- Correctly styles multimedia elements in a modern format.
- Ensures a `pointer` cursor shows on all appropriate interactive elements.
- Includes modern browser support ([see below](#browser-support)).

## 🏗 Browser Support

The styles in this project are compiled using rules that support the last 2 versions, and any version with coverage greater than 1%, of all modern browsers supported by [Browserslist](https://github.com/browserslist/browserslist).

```text
> 1%
last 2 versions
```

## 😞 Why

This package, and included main stylesheet, was born out of years of frustration and sheer disappointment with the evolution of the standard available tools to "reset" or "normalize" your CSS before creating your own styles/theme.

After years of creating a custom `_reset.scss`, `_base.css`, or `_elements.css` partial to complement and layer on top of either [Reset CSS](https://meyerweb.com/eric/tools/css/reset/) or [Normalize](https://necolas.github.io/normalize.css/), I got so frustrated I decided to research what other options are out there... surely there has to be a modern, accessible, unopinionated alternative? And here enters my disappointment - while there are some hopeful possibilities based on package names, I couldn't find anything that ticked all the boxes above.

So instead, I decided - why not pick and choose the best from all of them, audit what should actually be there, and create one package to rule them all and in the darkness bind them.

## ⤵️ Install

[![NPM](https://nodei.co/npm/css-init.png?compact=true)](https://nodei.co/npm/css-init/)

With [NPM](http://npmjs.com):

```sh
$ npm i css-init
```

With [Yarn](https://yarnpkg.com):

```sh
$ yarn add css-init
```

### Download

- [Expanded](https://github.com/sir-sharkey/css-init/blob/main/dist/init.css)
- [Minified](https://github.com/sir-sharkey/css-init/blob/main/dist/init.min.css)

## 🛠 Usage

> 📝 **Note:** replace "..node-modules" below with the path to your `/node_modules/` directory, or in your desired location.

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
import 'reset-css';
```

## 👥 GitHub

- [https://github.com/sir-sharkey/css-init](https://github.com/sir-sharkey/css-init)

## ✏️ Contributing

This project is open-source, and can only get better the more people use it and contribute to it (code contributions and issues/bugs/ideas are both welcome).

> ❤️ Feedback is welcome!

To submit any issues, bugs, or ideas for improvement please [open a new issue](https://github.com/sir-sharkey/css-init/issues/new) on GitHub.

## 📄 License

MIT

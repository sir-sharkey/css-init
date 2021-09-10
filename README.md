# css-init

# A modern CSS reset/normalization.

[![License: MIT](https://img.shields.io/badge/License-MIT-blueviolet.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/v/css-init)](https://www.npmjs.com/package/css-init)
[![npm](https://img.shields.io/npm/dw/css-init)](https://www.npmjs.com/package/css-init)

A minimal, unopinionated, and accessible CSS reset/normalization that correctly accounts for [HTML5 elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

## ⚙️ Features

### 👌 Minimal

- No extraneous, superfluous, or legacy styles; nothing included without an explanation or a reason.
- Legacy conventions in other resets and normalizations audited and edited/removed.
- Deprecated elements removed.
- Main file is minified.

### 🤫 Unopinionated

- The included rules are only intended to reset the styles for all appropriate [HTML Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), **NOT** to also add a layer of opinionated, default styles on top of the reset.
- These styles are meant to have a near-blank-slate effect.
  - 📝 **NOTE:** There are a few exceptions included that are restyled after resetting all elements.
- Meant to be used by developers in projects where themes/default styles are being added on top of the reset.
- Avoids necessitating an additional complementary stylesheet in order to remove opinionated styles added after using other popular legacy resets and normalizations.

### ♿️ Accessible

- Does not tamper with the natural accessibility of semantic HTML in an unaltered state.
- Does not remove, or mess with in any way, the default focus state styles!
  - ⚠️ You should _never_ remove/hide/suppress the default `:focus` outline styles without creating a custom one to override it.
- Sets `font-size` to `100%` and includes a note on why this is important.
- Sets default `line-height` on `body` and includes a note (and [link](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height#accessibility_concerns)) on why this is important.
- Ensures that `[hidden]` attribute styles are honored.
- Ensures that elements that are hidden are done so using `display: none`, as this also removes them from the accessibility tree.
- Does not hamper a user's ability to zoom.

### 📱 Modern

- Includes styles for all appropriate [HTML Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), including elements left out in other popular resets and normalizations.
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

This package was born out of years of disappointment with the evolution of standard available tools to reset or normalize your CSS before creating your own styles/theme.

After years of creating a custom `_reset.scss` partial to fully reset my own styles on top of [Reset CSS](https://meyerweb.com/eric/tools/css/reset/) or [Normalize](https://necolas.github.io/normalize.css/), I decided to research what other options are out there... surely there has to be a minimal, unopinionated, accessible, modern alternative? And here enters my disappointment - while there are some notable newer implementations of the same idea, I couldn't find anything that ticked all the boxes above.

So instead, I thought - why not pick and choose the best pieces of all available packages, audit what should actually be there, and create one package to tick all the above boxes.

> 📝 **NOTE:** The goal of this package is to correctly reset/normalize browser-default styles, creating a near-blank-slate effect (with a few exceptions) for you to then write your own styles on top of. Once you have included these styles, you can then begin writing your own base styles on top of them; it does NOT create a base or default set of styles for you to immediately begin authoring content with - this is left up to you. Happy styling!

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

> 📝 **NOTE:** replace "..node-modules" below with the path to your `/node_modules/` directory, or in your desired location.

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

There is an included `tags.html` file intended to act as an example page. You can load this file locally in any browser to see how all included elements look in the different browsers after the `css-init` styles are loaded; you will be able to note the differences in browser default styles, while also noting the consistency in the styles that are reset across the different browsers.

> **🚨NOTE:** this file is NOT meant to be accessible (hypocritical, I know...); but it's NOT meant to be a styleguide, rather just a page to view the elements (_styleguide and end-to-end testing with [Cypress](https://www.cypress.io/) coming soon!_ 🙌).

## 👥 GitHub

- [https://github.com/sir-sharkey/css-init](https://github.com/sir-sharkey/css-init)

## ✏️ Contributing

This project is open-source, and can only get better the more people use it and contribute to it (code contributions and issues/bugs/ideas are both encouraged).

> ❤️ Feedback is welcome!

To submit any issues, bugs, or ideas for improvement please [open a new issue](https://github.com/sir-sharkey/css-init/issues/new) on GitHub.

## 📄 License

MIT

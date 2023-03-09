# Scrolled Header

Add `active` class to fixed header while scrolling down and remove when scrolling up.

## Installation

`npm install scrolled-header`

## Usage

```javascript
import Header from "scrolled-header";

new Header({
  target: document.getElementById("js-header"), // required
  className: "scrolled",                        // active class
  offset: 50
});
```
```html
<header id="js-header">
  ...
</header>
```

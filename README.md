# ng-holder

An AngularJS directive for HolderJS.

## Usage

Install with bower:

```bash
npm install angular-holderjs --save
```

Add as a dependency in your Angular app:

```javascript
var app = angular.module('app', [
  'ngHolder',
]);
```

Use directive one of two ways:

```html
<img holder="holder.js/200x200/text:?">
<img holder data-src="holder.js/200x200/text:?">
```

## Change History

### v1.0.0

* Initial release

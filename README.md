# ng-holder

An AngularJS directive for [HolderJS](https://github.com/imsky/holder).

## Usage

Install with bower:

```bash
bower install holderjs angular-holderjs --save
```

Add as a dependency in your Angular app:

```javascript
var app = angular.module('app', [
  'ngHolder'
]);
```

Use directive:

```html
<img holder data-src="holder.js/200x200?text=?">
```

Optionally enable watch on `data-src`
```html
<img holder holder-watch data-src="holder.js/{{x}}x{{y}}?text={{text}}">
```


## Change History

### v1.0.1 - 2014/02/23

* Remove dependency on `holderjs` and install it separately in application

### v1.0.0 - 2014/02/23

* Initial release

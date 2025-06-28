DOMEY
===
**DOMEY** is a lightweight and simple DOM library that wraps the JavaScript
 API for manipulating HTML elements.

Usage and installation
===
To install the library use:

`npm i domey`

 Now, you can do:

`import $ from 'domey'`

Highly recommend to do `globalThis.$ = $` if you want the module to be accessed everywhere in your project.

To start using the library these are a couple examples:

```javascript
$.window.on('load', () => {
  const main = $.byId('main');

  const childDiv = new $('div')
    .attr('id', 'child-div')
    .child([
      new $('p')
        .text('some love!'),
      new $('input')
        .attr('type', 'button')
        .val('try me!')
        .on('click', () => alert("Some love for y'all!!")),
    ]);

  main.child(childDiv);
});
```

> Feel free to navigate through the code to fully understand the API, while it's finished in the DOCS.

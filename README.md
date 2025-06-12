# DOMEY

  **DOMEY** is a lightweight and simple DOM library that wraps the JavaScript
   API for manipulating HTML elements.

## Usage and installation

- To install the library use:

  `npm i domey`

- Now, you can do:

  `import $ from 'domey'`

  > Highly recommend to do `globalThis.$ = $` if you want the module to be accessed everywhere in your project

- To start using the library these are a couple examples:

  ```JavaScript
  // To obtain an element from its id
  const main = $.byId('main');

  //create a new div
  const childDiv = new $('div')
    .attr('id', 'child-div')
    .child(
      new $('p')
        .text('some love!')
    )
    .style({
      'background': 'green',
    });

  //add a child div to another div
  main.child(childDiv);

  //
  ```

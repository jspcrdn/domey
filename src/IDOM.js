import _DOMError from './DOMError.js';

/**
 * DOM Interface: Contract for manipulation of the elements of a HTML document
 *
 * Define the structure and methods that must implement any class that manage
 * the Document Object Model (DOM) manipulation
 */
class IDOM {
  /**
   * DOM class constructor
   *
   * @param {string|HTMLElement} element - Element or label for creation
   * @description
   * - If a string is provided, creates a new element
   * - If a HTML element is provided, uses the exixtent element
   */
  constructor(element) {
    if (this.constructor === IDOM) {
      _DOMError.instanceError(this.constructor.name);
    }
  }

  /**
   * Gets an element by its id
   *
   * @param {string} id - Element identifier
   * @returns {DOM} DOM instance
   */
  static byId(id) {
    _DOMError.methodError(IDOM.byId.name);
  }

  /**
   * Gets an element by its class name
   *
   * @param {string} classSelector - Class selector
   * @returns {DOM[]} Array of DOM instances
   */
  static byClass(classSelector) {
    _DOMError.methodError(IDOM.byClass.name);
  }

  /**
   * Gets the first element matching a query selector
   *
   * @param {string} query - CSS selector
   * @returns {DOM} DOM instance
   */
  static byQuery(query) {
    _DOMError.methodError(IDOM.byQuery.name);
  }

  /**
   * Gets all the elements matching a query selector
   *
   * @param {string} query - CSS selector
   * @returns {DOM[]} Array of DOM instances
   */
  static byQueryAll(query) {
    _DOMError.methodError(IDOM.byQueryAll.name);
  }

  /**
   * Adds an vent to the window object
   *
   * * @returns {Object} Object with the set of functions
   */
  static get window() {
    _DOMError.methodError(IDOM.window.name);
  }

  /**
   * Handles attribute of the element
   *
   * @param {string} attribute - Attribute name
   * @param {string} [value] - Attribute value
   * @returns {DOM|string} DOM instance or attribute value
   */
  attr(attribute, value) {
    _DOMError.methodError(this.attr.name);
  }

  /**
   * Adds an event to the element
   *
   * @param {string} name - Event name
   * @param {Function} event - Event management function
   * @param {boolean} [capture=false] - Capture phase
   * @returns {DOM} DOM instance
   */
  on(name, event, capture = false) {
    _DOMError.methodError(this.on.name);
  }

  /**
   * Deletes the event of an element
   *
   * @param {string} name - Event name
   * @param {Function} event - Event management function
   * @param {boolean} [capture=false] - Capture phase
   * @returns {DOM} DOM instance
   */
  off(name, event, capture = false) {
    _DOMError.methodError(this.off.name);
  }

  /**
   * Handles child elements
   *
   * @param {DOM|DOM[]} [childElement] - Child element(s) to add
   * @returns {DOM|DOM[]} DOM instane or list of child elements
   */
  child(childElement) {
    _DOMError.methodError(this.child.name);
  }

  /**
   * Cleans the element HTML
   *
   * @returns {DOM} DOM instance
   */
  clean() {
    _DOMError.methodError(this.clean.name);
  }

  /**
   * Changes the text of an element
   *
   * @param {string} txt Text to add to the element
   * @returns {DOM} DOM instance
   */
  text(txt) {
    _DOMError.methodError(this.text.name);
  }

  /**
   * Assigns a value to the component
   *
   * @param {string} value String with the value of the element
   * @returns {DOM} DOM instance
   */
  val(value) {
    _DOMError.methodError(this.val.name);
  }

  /**
   * Adds a class to the element
   *
   * @param {string} setClass Class string
   * @returns {DOM}
   */
  class(setClass) {
    _DOMError.methodError(this.class.name);
  }

  /**
   * Adds a style to an element
   *
   * @param {string|Object} style String or object with the style
   * @returns {DOM} DOM instance
   */
  style(style) {
    _DOMError.methodError(this.style.name);
  }

  /**
   * Removes a child of its parent
   *
   * @param {DOM} child Child element to remove
   * @returns {DOM} DOM instance
   */
  remove(child) {
    _DOMError.methodError(this.remove.name);
  }

  /**
   * Changes the visibility state of a component
   *
   * @param {boolean} isIt Boolean with the visibility state
   * @returns {DOM} DOM instance
   */
  visible(isIt) {
    _DOMError.methodError(this.visible.name);
  }

  /**
   * Changes the status of a component's display property
   *
   * @param {boolean} isIt Boolean with the display status
   * @returns {DOM} DOM instance
   */
  display(isIt) {
    _DOMError.methodError(this.display.name);
  }

  /**
   * Change the width of the component
   *
   * @param {string} width string with the width value
   * @returns {DOM} DOM instance
   */
  width() {
    _DOMError.methodError(this.width.name);
  }

  /**
   * Change the height of the component
   *
   * @param {string} height string with the height value
   * @returns {DOM} DOM instance
   */
  height() {
    _DOMError.methodError(this.height.name);
  }

  /**
   * Replace an element with another element node
   *
   * @param {DOM} node DOM instace with the new element node
   * @returns {DOM} DOM Instance
   */
  replace() {
    _DOMError.methodError(this.replace.name);
  }

  /**
   * Cleans the events of an element by replacing it with itself
   *
   * @returns {DOM} DOM Instance
   */
  cleanEvents() {
    _DOMError.methodError(this.cleanEvents.name);
  }

  /**
   * Destroys the element in the document
   *
   */
  destroy() {
    _DOMError.methodError(this.destroy.name);
  }

  /**
   * Allows iterating through an array of DOM elements with JavaScript's
   * native map() function
   *
   * @param {Function} fn - the function that will be executed for each record.
   *  (Works the same as JS maps)
   */
  map(fn) {
    _DOMError.methodError(this.map.name);
  }

  /**
   * Disables an element
   *
   * @returns {DOM} DOM Instance
   */
  disable() {
    _DOMError.methodError(this.disable.name);
  }

  /**
   * Enables an element
   *
   * @returns {DOM} DOM Instance
   */
  enable() {
    _DOMError.methodError(this.enable.name);
  }

  /**
   * Set or change the inner html of the element
   *
   * @param {string} html The string with the html to set
   * @returns {DOM} DOM instance
   */
  inner(html) {
    _DOMError.methodError(this.inner.name);
  }

  /**
   * Set or change the outer html of the element
   *
   * @param {string} html The string with the html to set
   * @returns {DOM} DOM instance
   */
  outer(html) {
    _DOMError.methodError(this.outer.name);
  }

  // SETTERS AND GETTERS

  /**
   * Returns a clone of the element
   *
   * @returns {DOM} DOM Instance with the clone
   */
  get clone() {
    _DOMError.methodError(this.clone.name);
  }

  /**
   * Returns the parent of the element
   *
   * @returns {DOM} DOM Instance with the parent
   */
  get parent() {
    _DOMError.methodError(this.parent.name);
  }

  /**
   * Returns the string with the element's tag
   *
   * @returns {string} String with the element's tag
   */
  get tag() {
    _DOMError.methodError(this.tag.name);
  }

  /**
   * Assigns the width value to the instance element
   *
   * @param {}
   */
  set width(width) {
    _DOMError.methodError(this.width.name);
  }

  /**
   * Returns the width of the instance element
   *
   * @returns {any} Value with the element's width
   */
  get width() {
    _DOMError.methodError(this.width.name);
  }

  /**
   * Assigns the height value to the instance element
   *
   */
  set height(height) {
    _DOMError.methodError(this.height.name);
  }

  /**
   * Element height
   *
   * @returns {Number}
   */
  get height() {
    _DOMError.methodError(this.height.name);
  }

  /**
   * Gets the internal DOM element
   *
   * @returns {HTMLElement} DOM Element
   */
  get element() {
    _DOMError.methodError(this.element.name);
  }

  /**
   * Returns the value of the inner html of the element
   *
   * @returns {string} String with the inner HTML of the element
   */
  get inner() {
    _DOMError.methodError(this.inner.name);
  }

  /**
   * Returns the value of the outer htmtl of the element
   *
   * @returns {string} String with the outer HTML of the element
   */
  get outer() {
    _DOMError.methodError(this.outer.name);
  }
}

export {
    IDOM,
};

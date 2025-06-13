import { IDOM } from './IDOM.js';

/**
 * DOM class: Utility  that wraps JavaScript API to manipulate DOM elemnts
 *
 * @extends {IDOM}
 * @implements {IDOM}
 */
class DOM extends IDOM {

  // Elemento del DOM almacenado
  #element;

  /**
   * @inheritdoc
   * @see IDOM#constructor
   */
  constructor(element) {
    super(element);
    if (element) {
      this.#element = typeof element === 'string'
        ? document.createElement(element) : element;
      return this;
    }
  }

  static byId(id) {
    return new DOM(document.getElementById(id));
  }

  static byClass(classSelector) {
    const elements = new Array(
      ...document.getElementsByClassName(classSelector)
    );
    return elements.map(elmnt => new DOM(elmnt));
  }


  static byQuery(query) {
    return new DOM(document.querySelector(query));
  }

  static byQueryAll(query) {
    return new DOM(document.querySelectorAll(query));
  }

  static get window() {
    /**
     * @param {string} name Name of the event
     * @param {Function} event Event management function
     */
    return {
      on: (name, event) => window.addEventListener(name, event),
    };
  }

  attr(attribute, value) {
    if (value !== undefined){
      this.#element.setAttribute(attribute, value);
      return this;
    } else if (attribute[0] === '-') {
      this.#element.removeAttribute(attribute, value);
      return this
    }
    return this.#element.getAttribute(attribute);
  }

  on(name, event, capture = false) {
    this.#element.addEventListener(name, event, capture);
    return this;
  }

  off(name, event, capture = false) {
    this.#element.removeEventListener(name, event, capture);
    return this;
  }

  child(childElement) {
    if (childElement?.length) {
      for (let child in childElement) {
        this.#element.appendChild(childElement[child].element);
      }
    } else if (childElement) {
      this.#element.appendChild(childElement.element);
    } else if (this.#element){
      return (new Array(...this.#element.children)).map(
        elmnt => new DOM(elmnt)
      );
    }
    return this;
  }

  clean() {
    this.#element.HTML = '';
    return this;
  }

  text(txt) {
    this.#element.textContent = txt;
    return this;
  }

  val(value) {
    if (value) {
      this.#element.value = value;
    } else {
      return this.element.value
    }
    return this;
  }

  class(setClass) {
    this.#element.classList.add(setClass);
    return this;
  }

  style(style) {
    if (typeof style === 'string') {
      return this.#element.style[style];
    } else {
      for (const property in style) {
        this.#element.style[property] = style[property];
      }
    }

    return this;
  }

  remove(child) {
    this.#element.removeChild(child.element);
    return this;
  }

  visible(isIt) {
    const visibility = isIt ? 'visible' : 'hidden';
    this.style({ visibility });
    return this;
  }

  display(isIt) {
    const display = isIt ? '' : 'none';
    this.style({ display });
    return this;
  }

  width(width) {
    this.width = width;
    return this;
  }

  height(height) {
    this.height = height;
    return this;
  }

  replace(node) {
    this.#element.replaceWith(node);
    return this;
  }

  cleanEvents() {
    return this.replace(this.clone.element);
  }

  destroy() {
    this.element.remove();
  }

  map(fn) {
    return Array.from(this.#element).map(fn);
  }

  disable() {
    this.#element.disabled = true;
    return this;
  }

  enable() {
    this.#element.disabled = false;
    return this;
  }

  inner(html) {
    this.#element.innerHTML = html;
    return this;
  }

  outer(html) {
    this.#element.outerHTML = html;
    return this;
  }

  get clone() {
    return new DOM(this.#element.cloneNode(true));
  }

  get parent() {
    return new DOM(this.#element.parentElement);
  }

  get tag() {
    return this.#element.tagName;
  }

  set width(width) {
    this.#element.style.width = width;
  }

  get width() {
    return this.#element.style.width;
  }

  set height(height) {
    this.#element.style.height = height;
  }

  get height() {
    return this.#element.style.height;
  }

  get element() {
    return this.#element;
  }

  get inner() {
    return this.#element.innerHTML;
  }

  get outer() {
    return this.#element.outerHTML;
  }
}

const DOMEY = (() => {
  try {
    if (document !== undefined)  {
      return DOM;
    }
  } catch (e) {
    throw new Error('This library needs to exist on context where DOM exists');
  }
})();

export {
  DOMEY,
}

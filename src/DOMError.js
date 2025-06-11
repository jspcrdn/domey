class _DOMError extends Error{
  constructor(message = 'DOM Extension Error') {
    super(message);
    this.name = "DOMExtensionError";

    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, _DOMError);
    }
  }

  static instanceError(interfaceName = 'Interface') {
    throw new _DOMError(
      `Cannot instanciate ${interfaceName} directly.
       Use the right implementation.`
     );
  }

  static methodError(methodName = 'method') {
    throw new _DOMError(`${methodName} must be implemented by child class`);
  }
}

export default _DOMError;

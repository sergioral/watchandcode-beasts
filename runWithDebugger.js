function runWithDebugger(callback, optionalArgs) {
  if (optionalArgs) {
    return callback.call(null, optionalArgs);
  } else {
    return callback();
  }
}
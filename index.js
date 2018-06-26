exports.default = function(callback, timeout = 500) {
  var value = '';
  var timer = null;

  var run = () => {
    timer = setTimeout(function() {
      callback(value);
      clearTimeout(timer);
      timer = null;
    }, timeout);
  };

  return function(e) {
    value = e.target.value;
    if (!timer) {
      run();
    } else {
      clearTimeout(timer);
      run();
    }
  };
};

export default (callback, timeout = 500) => {
  let value = '';
  let timer = null;

  let run = () => {
    timer = setTimeout(() => {
      callback(value);
      clearTimeout(timer);
      timer = null;
    }, timeout);
  };

  return e => {
    value = e.target.value;
    if (!timer) {
      run();
    } else {
      clearTimeout(timer);
      run();
    }
  };
};

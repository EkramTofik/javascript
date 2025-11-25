function debounce(func, ms) {
  let timer;

  return function(...args) {
    clearTimeout(timer); // cancel previous timer

    timer = setTimeout(() => {
      func.apply(this, args); // call with latest arguments
    }, ms);
  };
  
}
function show(val) {
  console.log(val);
}

let f = debounce(show, 120000);

f("a");  // ignored
f("b");  // only this runs (after 1s)

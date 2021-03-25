function counter() {
  var c = 0;
  return {
    inc: function () {
      ++c;
    },
    dec: function () {
      --c;
    },
    get: function () {
      return c;
    },
    reset: function () {
      c = 0;
    },
  };
}

const myCounter = counter();

console.log(myCounter.inc());
console.log(myCounter.get()); //1

console.log(myCounter.dec());
console.log(myCounter.reset());

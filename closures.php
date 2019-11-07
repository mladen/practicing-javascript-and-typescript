<script>
  // https://learnxinyminutes.com/docs/javascript/

  // One of JavaScript's most powerful features is closures. If a function is
  // defined inside another function, the inner function has access to all the
  // outer function's variables, even after the outer function exits.
  function sayHelloInFiveSeconds(name) {
    var prompt = "Hello, " + name + "!";
    // Inner functions are put in the local scope by default, as if they were
    // declared with `var`.
    function inner() {
      alert(prompt);
    }
    setTimeout(inner, 5000);
    // setTimeout is asynchronous, so the sayHelloInFiveSeconds function will
    // exit immediately, and setTimeout will call inner afterwards. However,
    // because inner is "closed over" sayHelloInFiveSeconds, inner still has
    // access to the `prompt` variable when it is finally called.
  }
  sayHelloInFiveSeconds("Adam"); // will open a popup with "Hello, Adam!" in 5s
</script>
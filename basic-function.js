// Create a variable called msg to hold a new message
var msg = 'Sign up to receive our newsletter for 10% off!';
 
// Create a function to update the content of the element whose id attribute has a value of message
function updateMessage() {
  var el = document.getElementById('message');
  el.textContent = msg;
}
 
// Call the function
updateMessage();

// call backs are particularly important in backend js; function(callback_fn) will compute callback and return to function() to use

// functon expression is-a anonymous function
let area = function(l,w){
  return l*w;

}

let size = area(3,5);

// IIFE
let area = (function() {
  let width = 3;
  let length = 2;
  return length * width;
}())

// when to use anonymous and iffys? only use once/prevent conflicts with same name
// can iffys be parametrized or accept vars outside of function scope? YES, but function call, the final(), is empty.
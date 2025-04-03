function firstChar(text) {
  return text.trim()[0] || '';
}
const text = prompt("Enter a string:");

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));

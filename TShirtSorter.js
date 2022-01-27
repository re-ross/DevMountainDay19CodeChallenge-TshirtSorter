const tShirtSorter = (text) => {
  return text.split("").sort().reverse().join("");
};
console.log(tShirtSorter("lms"));
console.log(tShirtSorter("smllms"));

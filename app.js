// lowercase
var personName = "Baber";
console.log("lowercase:", personName.toLowerCase());
// uppercase
console.log("uppercase:", personName.toUpperCase());
// titlecase
console.log("titalcase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));

// lowercase
let personName: string = "baber"
console.log("lowercase:" , personName.toLowerCase());
// uppercase
console.log("uppercase:", personName.toUpperCase());
// titlecase
console.log("titalcase:", personName. replace(/\bw/g,c=> c.toUpperCase()));
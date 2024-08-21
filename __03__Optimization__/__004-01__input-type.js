// GOOD PRAXE
const nameInputOptimized = document.createElement("input");
nameInputOptimized.placeholder = "Product name";
// !!!
console.log(nameInputOptimized.type); // 'text'
// !!!


// !!! BAG PRAXE
const nameInput = document.createElement("input");
console.log(nameInput.type); // 'text'
nameInput.type = "text"; // !!! no sense if 'text' is default value
nameInput.placeholder = "Product name";
// !!! BAG PRAXE end

console.log(nameInput.type); // 'text'

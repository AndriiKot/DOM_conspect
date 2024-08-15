// GOOD PRAXE
const btn = document.createElement("button");
const menu = ["class-1", "class-2", "class-3"];

btn.className = menu.join(" ");

console.log(btn.className); // 'class-1 class-2 class-3'

// BAG PRAXE
const btn2 = document.createElement("button");
btn2.className = "class-1";
btn2.className += " class-2 class-3"; // !!! создаются промежуточные строки

console.log(btn2.className); // 'class-1 class-2 class-3'

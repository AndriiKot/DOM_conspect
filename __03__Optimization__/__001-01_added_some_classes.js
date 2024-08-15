// GOOD PRAXE
const btn = document.createElement("button");
const menu = ["class-1", "class-2", "class-3"];

btn.classList.add(...menu);

console.log(btn.className); // 'class-1 class-2 class-3'

// BAD PRAXE
const btn2 = document.createElement("button");

btn2.classList.add("class-1");
btn2.classList.add("class-2");
btn2.classList.add("class-3");

console.log(btn2.className); // 'class-1 class-2 class-3'

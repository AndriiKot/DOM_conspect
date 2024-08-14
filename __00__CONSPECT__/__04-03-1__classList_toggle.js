const btn = document.createElement("button");

// !!!
btn.classList.toggle("active");  
// елси у элемента нет такого класса то он добавится
// если у элемента есть такой класс то он удаляется
// !!!

console.log(btn.className); // 'active'

// !!!
btn.classList.toggle("active");
console.log(btn.className); // ''
// !!!




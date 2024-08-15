const btn = document.createElement("button");

// !!!
console.log(btn.classList.contains("active")); // false
// если данного класса нет то вернет false
// !!!

// !!!
btn.className = "active";
console.log(btn.classList.contains("active")); // true
// если данного класса есть то вернет true
// !!!

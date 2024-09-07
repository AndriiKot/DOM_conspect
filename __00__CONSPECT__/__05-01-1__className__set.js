const btn = document.createElement("button");

btn.className = "active";
console.log(btn.className); // 'active'

// !!! BAD PRAXE
btn.className += " btn-1"; // bad practice !!! создаются промежуточные строки
// !!!

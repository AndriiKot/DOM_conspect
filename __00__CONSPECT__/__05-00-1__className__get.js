
const btn = document.createElement("button");

// !!!
console.log(btn.className); //  ''
// !!!
// если у елемента нет класса то будет пустая строка



// !!!
btn.className = "active";
// !!!
console.log(btn.className); // 'active'

// !!!
btn.classList.add("btn-1");
// !!!
console.log(btn.className); // 'active btn-1'
// если у елемента несколько классов то они будут выведены в строку разделенную пробелом


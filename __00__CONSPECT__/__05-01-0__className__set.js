
const btn = document.createElement("button");

btn.className = "active";
console.log(btn.className); // 'active'

// !!! 
btn.className = "btn-1";
console.log(btn.className); // 'btn-1'
// старое значение будет полностью перезаписано новым значением
// !!!

//  !!!
btn.className = 'btn-1 btn-big';
console.log(btn.className); // 'btn-1 btn-big'
// можно несколько  задавать классов разделенных пробелом
// если у елемента уже был класс то он перезапишется 
// !!!


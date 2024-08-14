const btn = document.createElement("button");
btn.textContent = 'Button 1';
btn.classList.add("active");  

console.log(btn)  // <button class>Button 1</button>



// !!! remove class
btn.classList.remove("active");
// !!!



console.log(btn);   // <button class>Button 1</button>



document.body.append(btn);






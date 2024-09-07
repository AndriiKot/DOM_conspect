const fragment = document.createDocumentFragment();

const newDiv1 = document.createElement("div");
newDiv1.textContent = "Element 1";

const newDiv2 = document.createElement("div");
newDiv2.textContent = "Element 2";

fragment.append(newDiv1, newDiv2); // !!! append позволяет добавлять несколько элементов

document.body.append(fragment);  // !!! append позволяет добавлять несколько элементов



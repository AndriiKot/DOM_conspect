const fragment = document.createDocumentFragment();

const newDiv1 = document.createElement('div');
newDiv1.textContent = 'Element 1';

const newDiv2 = document.createElement('div');
newDiv2.textContent = 'Element 2';

fragment.appendChild(newDiv1);
fragment.appendChild(newDiv2);

document.body.appendChild(fragment);

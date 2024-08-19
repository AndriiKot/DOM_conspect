
const ageInput = document.createElement("input");

// !!!
  ageInput.placeholder // !!! '' !!!
  console.log(ageInput.placeholder = 123) // '123' 
  console.log(typeof ageInput.placeholder) // 'string'
// !!! 


// !!!
  ageInput.placeholder = 'FirstName'
  console.log(ageInput.placeholder) // 'FirstName'
  console.log(typeof ageInput.placeholder) // 'string'
// !!!

// !!!  WARNING
  ageInput.placeholder = []  // []
  console.log(ageInput.placeholder) // ''
// !!! 	WARNING

// !!! WARNING
   ageInput.placeholder = {}
   console.log(ageInput.placeholder) // '[object Object]'
// !!! WARNING











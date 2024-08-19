
const nameInput = document.createElement("input");

// !!!
 console.log(nameInput.value) // ''
 console.log(typeof nameInput.value) // string
// !!!


// !!! WARNING
  nameInput.value = 10
  console.log(nameInput.value) // '10'
  console.log(typeof nameInput.value) // 'string'
// !!! WARNING


// !!! WARNING
   nameInput.value = false
   console.log(nameInput.value) // 'false'
   console.log(typeof nameINput.value) // 'string'
// !!! WARNING


// !!! WARNING
   nameInput.value = [] // Array
   console.log(nameInput.value) // ''
   console.log(typeof nameInput.value)
// !!! WARNING

// !!! WARNING
   nameInput.value = {}
   console.log(nameInput.value) // '[object Object]'
   console.log(typeof nameInput.value) // 'string'
// !!! WARNING


// !!! WARNING
   nameInput.value = NaN
   console.log(nameInput.value) // 'NaN'
   console.log(typeof nameInput.value) // 'string'
// !!! WARNING

// !!! WARNING
   nameInput.value = () => {}
   console.log(nameInput.value) // '() => {}'
   console.log(typeof nameInput.value) // 'string'
// !!! WARNING

















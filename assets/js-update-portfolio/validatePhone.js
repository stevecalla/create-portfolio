// function validate(phone) {
//   const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//   console.log(regex.test(phone))
// }

// validate('1234567890')     // true
// validate(1234567890)       // true
// validate('(078)789-8908')  // true
// validate('123-345-3456')   // true

{/* <a href="tel:+1(201)934-7068">${phoneNumber}</a> */}

// https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/pizza.js
// {
//   type: 'input',
//   name: 'phone',
//   message: "What's your phone number?",
//   validate(value) {
//     const pass = value.match(
//       /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
//     );
//     if (pass) {
//       return true;
//     }

//     return 'Please enter a valid phone number';
//   },
// },
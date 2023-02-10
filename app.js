// const form = document.querySelector('#form');
// const claimBtn = document.querySelector('.ctaButton');

// /**Creating an object variable to hold all inputs by ID */
// const inputs = {
//     firstName: document.querySelector('#firstName'),
//     lastName: document.querySelector('#lastName'),
//     email: document.querySelector('#email'),
//     password: document.querySelector('#password')
// }



// claimBtn.addEventListener('click', function(e){
//     e.preventDefault();

//     firstNameValue = inputs.firstName.value
//     let error = false;
//     let feedback = firstName.nextElementSibling;

//     if (feedback && feedback.classList.contains('is-valid')){
//         feedback.remove();
//     }
//     if (firstNameValue === ""){
//         error = true;
//         firstName.classList.add('is-invalid')  //the 'is-invalid' is an in-built bootStrap class for form validation
//         firstName.insertAdjacentHTML('afterend',"<div class='invalid feedback'>First name cannot be empty</div>")
//     }
//     else {
//         firstName.classList.add('is-valid');
//         firstName.insertAdjacentHTML('afterend', "<p class = 'valid feedback'>Looks good!</p>")
//         firstName.classList.remove('is-invalid');
        
//     }
// })




// SOLUTION 2

// const form = document.querySelector('#form');
// const claimBtn = document.querySelector('.ctaButton');

// /**Creating an object variable to hold all inputs by ID */
// const inputs = {
//     firstName: document.querySelector('#firstName'),
//     lastName: document.querySelector('#lastName'),
//     email: document.querySelector('#email'),
//     password: document.querySelector('#password')
// }



// claimBtn.addEventListener('click', function(e){
//     e.preventDefault();

//     firstNameValue = inputs.firstName.value
//     let error = false;
//     let feedback = firstName.nextElementSibling; 
    
//     if (feedback && feedback.classList.contains('valid-feedback')) {
//         feedback.remove('invalid-feedback');
//     }
//     // else{
//     //     feedback && feedback.classList.contains('invalid-feedback')
//     //     feedback.remove()
//     // }

//     if (firstNameValue === ""){
//         error = true;
//         firstName.classList.add('is-invalid')  //the 'is-invalid' is an in-built bootStrap class for form validation
//         firstName.insertAdjacentHTML('afterend',"<div class= 'invalid-feedback'>First Name cannot be empty</div>")
//         firstName.classList.remove('is-valid')
//     }
//     else {
//         firstName.classList.add('is-valid');
//         firstName.insertAdjacentHTML('afterend', "<p class = 'valid-feedback'>Looks good!</p>")
//         firstName.classList.remove('is-invalid');
//     }
// })








const form = document.querySelector('#form');
const claimBtn = document.querySelector('.ctaButton');

/**Creating an object variable to hold all inputs by ID */
const inputs = {
    firstName: document.querySelector('#firstName'),
    lastName: document.querySelector('#lastName'),
    email: document.querySelector('#email'),
    password: document.querySelector('#password')
}







claimBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(firstName.value === ""){
        firstName.classList.add('.is-invalid')
        firstName.insertAdjacentHTML("afterend","<p class='invalid feedback'>First Name cannot be empty</p>")
    }
    else{
        firstName.classList.remove('.is-invalid')
        firstName.classList.add('.is-valid')
        firstName.insertAdjacentHTML("afterend", "<p class= 'valid-feedback'>Looks good!</p>")
    }
})























// function validateInput(inputType, errorMessage){
//     let err = false;
//     if (inputType.value === ""){
//         err = true;
//         inputType.classList.add('.is-invalid');
//         inputType.insertAdjacentHTML('afterend',"<div class= 'invalid feedback'>"+errorMessage+"</div>")
//         inputType.classList.remove('.is-valid');

//     }
//     else if (inputType !== ""){
//         // error = false;
//         inputType.classList.add('is-valid');
//         inputType.insertAdjacentHTML("afterend", "<span class='valid feedback'>Looks good</span>")
//         inputType.classList.remove('.is-invalid')
//     }
// }
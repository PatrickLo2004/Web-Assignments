const name = document.getElementById('name')
const userID = document.getElementById('userID')
const gender = document.getElementById('gender')
const email = document.getElementById('email')
const address = document.getElementById('address')
const country = document.getElementById('country')
const ZIPcode = document.getElementById('ZIPcode')
const language = document.getElementById('language')
const password = document.getElementById('password')
const bio = document.getElementById('bio')


const form = document.getElementById('form_up')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {

//alle ifs moeten switch statements worden denk ik
    let messages = [];
    
    if(userID.length < 5 | userID.length > 12){
        messages.push('UserID must be of length 5 to 12')
    }
    let check = userID.charAt(0).toUpperCase()
    if(userID.charAt(0) != check){
        messages.push('UserID must start with a capital letter')
    }
    //^ik weet niet of [A-Za-z0-9-''/i] voor alle special characters checkt
    if(!userID.matches(/[0-9]/i) | !userID.matches([A-Za-z0-9-''/i])){
        messages.push('UserID must contain a numerical or special character')
    }

    if(password.length < 12){
        messages.push('Password must be longer than 12 characters')
    }

    if(!password.matches(/[0-9]/i)){
        messages.push('Password must contain a number')
    }
    //^ik weet niet of [A-Za-z0-9-''/i] voor alle special characters checkt
    if(!password.matches([A-Za-z0-9-''/i])){
        messages.push('Password must contain a special character')
    }

    if(!password.Any(char.isUpper)){
        messages.push('Password must contain an uppercase letter')
    }
    if(!password.Any(char.isLower)){
        messages.push('Password must contain a lowercase letter')
    }
    //dictionary check

    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    
})
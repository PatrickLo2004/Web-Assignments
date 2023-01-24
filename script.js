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

const nameValue = document.getElementById('name').value.trim()
const userIDValue = document.getElementById('userID').value.trim()
const genderValue = document.getElementById('gender').value.trim()
const emailValue = document.getElementById('email').value.trim()
const addressValue = document.getElementById('address').value.trim()
const countryValue = document.getElementById('country').value.trim()
const ZIPcodeValue = document.getElementById('ZIPcode').value.trim()
const languageValue = document.getElementById('language').value.trim()
const passwordValue = document.getElementById('password').value.trim()
const bioValue = document.getElementById('bio').value.trim()


const form = document.getElementById('form_up')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    //alle ifs moeten switch statements worden denk ik
    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = grid-item.querySelector('.error');
    
        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success')
    }
    
    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = grid-item.querySelector('.error');
    
        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };

    //All conditions for name
    let condition = false;
    for(var i = 0; i<nameValue.length; i++){
        if(!nameValue.charAt(i).matches(/^[a-zA-Z]+$/)){
            condition = true
            break 
        }
    }
    if(condition){
        setError(name, 'name must contain alphabet characters only');
    }else{
        setSuccess(name)
    }

    //All conditions for userID
    let check = userID.charAt(0).toUpperCase()
    if(userID.length < 5 | userID.length > 12){
        setError(userID, 'UserID must be of length 5 to 12')
    }
    else if(userID.charAt(0) != check){
        setError(userID, 'UserID must start with a capital letter')
    }
    //^ik weet niet of [A-Za-z0-9-''/i] voor alle special characters checkt
    else if(!userID.matches(/[0-9]/i) | !userID.matches([A-Za-z0-9-''/i])){
        setError(userID,'UserID must contain a numerical or special character')
    }else{
        setSuccess(userID)
    }


    //All conditions for password
    if(password.length < 12){
        setError(password, 'Password must be longer than 12 characters')
    }

    else if(!password.matches(/[0-9]/i)){
        setError(password,'Password must contain a number')
    }
    //^ik weet niet of [A-Za-z0-9-''/i] voor alle special characters checkt
    else if(!password.matches([A-Za-z0-9-''/i])){
        setError(password,'Password must contain a special character')
    }

    else if(!password.Any(char.isUpper)){
        setError(password,'Password must contain an uppercase letter')
    }
    else if(!password.Any(char.isLower)){
        setError(password,'Password must contain a lowercase letter')
    }else{
        setSuccess
    }
    
})
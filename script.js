window.onload = count(); 
let hours = 0; 
let minutes = 0;
let seconds = 0;
let clicks = 0;
let presses = 0;
let chars = 0;

const textAreas = document.querySelectorAll(".inputField");

const name = document.getElementById('name');
const userID = document.getElementById('userID');
const gender = document.getElementById('gender');
const email = document.getElementById('email');
const address = document.getElementById('address');
const country = document.getElementById('country');
const ZIPcode = document.getElementById('ZIPcode');
const language = document.getElementById('language');
const password = document.getElementById('password');
const bio = document.getElementById('bio');
const nameValue = document.getElementById('name').value.trim();
const userIDValue = document.getElementById('userID').value.trim();
const emailValue = document.getElementById('email').value.trim();
const addressValue = document.getElementById('address').value.trim();
const countryValue = document.getElementById('country').value.trim();
const ZIPcodeValue = document.getElementById('ZIPcode').value.trim();
const languageValue = document.getElementById('language').value.trim();
const passwordValue = document.getElementById('password').value.trim();
const bioValue = document.getElementById('bio').value.trim();

const form = document.getElementById('form_up');
const errorElement = document.getElementById('error');


const gridItems = document.getElementsByClassName("grid-item");
for(let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener("keydown", () => {
        presses++;
        document.getElementById("key-presses").innerHTML = presses;
    })
}


document.getElementById("submit-button").onclick = () => {
    let chars = 0;
    console.log(textAreas);
    for(let aapje = 0; aapje < textAreas.length; aapje++) {
        console.log(textAreas[aapje].textContent); 
        chars = chars + textAreas[aapje].value.length;
    }

    document.getElementById("char-presses").innerHTML = chars;
    document.getElementById("tracker").style.visibility = "visible";
};


document.getElementById("layout").addEventListener("click", clickInc);
function clickInc() {  
    clicks++;
    document.getElementById("mouse-clicks").innerHTML = clicks;
   
}

//when a character is typed call this function
function charInc() {
    chars++;
    document.getElementById("char-presses").innerHTML = chars;
}

function count() {
    window.setInterval(() => {
        seconds++;
    
        if(seconds > 59) {
            minutes++;
            seconds = 0;
        } 
    
        if(minutes > 59) {
            hours++;
            minutes = 0;
        }
    
        document.getElementById("seconds").innerHTML = seconds;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("hours").innerHTML = hours;
    
    }, 1000);
 }

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //alle ifs moeten switch statements worden denk ik
    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = grid-item.querySelector('.error');
    
        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
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
            condition = true;
            break;
        }
    }
    if(condition){
        setError(name, 'name must contain alphabet characters only');
    }else{
        setSuccess(name);
    }

    //All conditions for userID
    let check = userID.charAt(0).toUpperCase();
    if(userID.length < 5 | userID.length > 12){
        setError(userID, 'UserID must be of length 5 to 12');
    }
    else if(userID.charAt(0) != check){
        setError(userID, 'UserID must start with a capital letter');
    }
    //^ik weet niet of [A-Za-z0-9-''/i] voor alle special characters checkt
    else if(!userID.matches(/[0-9]/i) | !userID.matches([A-Za-z0-9-''/i])){
        setError(userID,'UserID must contain a numerical or special character');
    }else{
        setSuccess(userID);
    }


    //All conditions for password
    if(password.length < 12){
        setError(password, 'Password must be longer than 12 characters');
    }

    else if(!password.matches(/[0-9]/i)){
        setError(password,'Password must contain a number');
    }
    //^ik weet niet of [A-Za-z0-9-''/i] voor alle special characters checkt
    else if(!password.matches([A-Za-z0-9-''/i])){
        setError(password,'Password must contain a special character');
    }

    else if(!password.Any(char.isUpper)){
        setError(password,'Password must contain an uppercase letter');
    }
    else if(!password.Any(char.isLower)){
        setError(password,'Password must contain a lowercase letter');
    }else{
        setSuccess;
    }
    
})




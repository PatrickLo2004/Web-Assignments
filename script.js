//START OF BEHAVIOUR TRACKER

//when page is loaded the count method is called
window.onload = count(); 

//intitializing tracking variables
let hours = 0; 
let minutes = 0;
let seconds = 0;
let clicks = 0;
let presses = 0;
let chars = 0;
const textAreas = document.querySelectorAll(".inputField"); //all input fields in an array
const items = document.getElementsByClassName("item"); //all form elements in an array

//for loop to assign an eventListener to each element of the form and update presses
//each time a key is pressed
for(let i = 0; i < items.length; i++) {
    items[i].addEventListener("keydown", () => {
        presses++;
        document.getElementById("key-presses").innerHTML = presses;
    })
}

//when the submit button is clicked this funciton runs
document.getElementById("submit-button").onclick = () => {
    if(tracker >= 8) {        
        
        let chars = 0; //the total amount of characters in the input fields is initialised 
        

        for(let i = 0; i < textAreas.length; i++) {
            chars = chars + textAreas[i].value.length; //append the length of the te in all boxes to char
        }

        document.getElementById("char-presses").innerHTML = chars; //displaying chars in the character box
        document.getElementById("tracker").style.visibility = "visible"; //making the behaviour box visible

        alert("hello"); 
    }
    tracker = 0;
};


//for every click the click counter is updated
document.getElementById("layout").addEventListener("click", clickInc);
function clickInc() {  
    clicks++;
    document.getElementById("mouse-clicks").innerHTML = clicks;
}

//function to start and maintain the timer
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

let tracker = 0;

//END OF BEHAVIOUR TRACKER

const form = document.getElementById('form1')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
})

const username = document.getElementById('name')
const userID = document.getElementById('userID')
const gender = document.getElementById('gender')
const email = document.getElementById('email')
const address = document.getElementById('address')
const country = document.getElementById('country')
const ZIPcode = document.getElementById('ZIPcode')
const language = document.getElementById('language')
const password = document.getElementById('password')
const bio = document.getElementById('bio')

function checkInputs (){
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
    


    if(nameValue === ''){
        setError(username, 'Full name is required');
    }else if(/[0-9\W]/.test(nameValue)){
        setError(username, 'Full name must contain alphabet only')
    }else{
        setSuccess(username);
    }


    let check = userIDValue.charAt(0).toUpperCase();
    if(userIDValue === ''){
        setError(userID, 'UserID is required');
    }else if(userIDValue.length < 5 | userIDValue.length > 12){
        setError(userID, 'UserID must be of length 5 to 12');
    }else if(userIDValue.charAt(0) != check){
        setError(userID, 'UserID must start with a capital letter');
    }
    else{
        setSuccess(userID);
    }


    if(genderValue === ''){
        setError(gender, "Gender is required")
    }else{
        setSuccess(gender);
    }

    if(emailValue === ''){
        setError(email, 'Email is required');
    }else if(!/@/.test(emailValue)){
        setError(email, 'Email must be a valid emailID containing @');
    }else{
        setSuccess(email);
    }

    if(countryValue === ''){
        setError(country, 'Country is required');
    }else{
        setSuccess(country);
    }

    if(ZIPcodeValue === ''){
        setError(ZIPcode, 'ZIPcode is required');
    }else if(ZIPcodeValue.length != 6 || !/[0-9]/.test(ZIPcodeValue.charAt(0)) || !/[0-9]/.test(ZIPcodeValue.charAt(1)) ||
        !/[0-9]/.test(ZIPcodeValue.charAt(2)) || !/[0-9]/.test(ZIPcodeValue.charAt(3)) || !/[A-za-z]/.test(ZIPcodeValue.charAt(4)) 
        || !/[A-Za-z]/.test(ZIPcodeValue.charAt(5))){
            setError(ZIPcode, 'ZIPcode must be of format 1234AB')
    }else{
        setSuccess(ZIPcode);
    }

    if(languageValue === ''){
        setError(language, 'Language is required');
    }else{
        setSuccess(language);
    }

    if(passwordValue === ''){
        setError(password, 'Password is required');
    }else if(passwordValue.length < 12){
        setError(password, 'Password must be longer than 12 characters');
    } else if(!/[A-Z]/.test(passwordValue)){
        setError(password,'Password must contain an uppercase letter');
    }
    else if(!/[a-z]/.test(passwordValue)){
        setError(password,'Password must contain a lowercase letter');
    }else if(!/[0-9]/.test(passwordValue)){
        setError(password,'Password must contain a number');
    }else if(!/[\W]/.test(passwordValue)){
        setError(password,'Password must contain a special character');
    }else{
        setSuccess(password);
    }
}

function setError(field, message){
    const control  = field.parentElement;
    const error = control.querySelector('small');
    control.className = 'item error'
    error.innerText = message;
}

function setSuccess(element) {
    const inputControl = element.parentElement;
    inputControl.className = 'item success'
    tracker++;
};




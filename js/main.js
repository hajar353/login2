var signupBtn = document.getElementById('signupBtn');
var signinBtn = document.getElementById('signinBtn');
var inputName= document.getElementById('inputName');
var signinHome= document.getElementById('signinHome');
var title = document.getElementById('title');
var form = document.getElementById('form');
var logOut=document.getElementById('logOut');

var inputname=document.getElementById('name');
var inputemail=document.getElementById('email');
var inputpassword=document.getElementById('password');




var outbut=[]
if (localStorage.getItem('outbut') != null) {
    outbut = JSON.parse(localStorage.getItem('outbut'));
  }

function signInBtn(){
   
    document.querySelector('.message').innerHTML=''
    inputName.classList.add('overflow-hidden')
    inputName.style.maxHeight="0";
    title.innerHTML='Sign In'
    signupBtn.classList.add('change-color');
    signinBtn.classList.remove('change-color');
    signinHome.classList.remove('d-none');
    signinBtn.classList.add('d-none');
   


}

function signUpBtn(){
    if( valdation() ==true){

        if(check() ==false){

            var inputValues={
                name:inputname.value,
                email:inputemail.value,
                password:inputpassword.value
            }
            outbut.push(inputValues);
            localStorage.setItem("outbut", JSON.stringify(outbut));
           
    document.querySelector('.message').innerHTML='Success'
    clearInputs()

        }
        else{
            document.querySelector('.message').innerHTML='email is exist';
        }
  
    }
   else{
    document.querySelector('.message').innerHTML=`${valdation()}`
   }

    inputName.classList.remove('overflow-hidden')
    inputName.style.maxHeight="65px";
    title.innerHTML='Sign Up'
    signupBtn.classList.remove('change-color');
    signinBtn.classList.add('change-color');
    signinHome.classList.add('d-none');
    signinBtn.classList.remove('d-none');
   
   

}

function clearInputs (){
  inputname.value=""
  inputemail.value=""
  inputpassword.value=""
}


function check() {
    for (var i=0; i < outbut.length; i++) {
        if (inputemail.value==outbut[i].email) {
            return true
        }
       
    }
  

    return false
}


var users= [];

users = JSON.parse(localStorage.getItem('outbut'))


function signInHome(){
    
//   title.classList.add('d-none')
//     form.classList.add('d-none');
// logOut.classList.remove('d-none');


var email = inputemail.value
var password = inputpassword.value

for (var i = 0; i < users.length; i++) {

    if (users[i].email == email && users[i].password == password) {
        document.querySelector('#welcome').classList.remove('d-none');
        document.querySelector('#welcome').innerHTML= `welcome ${users[i].name}`
          title.classList.add('d-none')
    form.classList.add('d-none');
logOut.classList.remove('d-none');
        
    }
    //    else{
    //     // form.classList.remove('d-none');
    //     // logOut.classList.add('d-none')
    // }

  
}
 


}


function LogOut(){
    title.innerHTML="Sign In"
    form.classList.remove('d-none');
    logOut.classList.add('d-none');
    document.querySelector('#welcome').classList.add('d-none');
    title.classList.remove('d-none')

}

function valdation() {
    var regexName = /[a-z]{3,20}/i
    var regexEmail = /[a-z0-9]@(gmail|yahoo)\.com/i
    var regexPassword = /[a-z0-9]{5,10}/i
    if (regexName.test(inputname.value) == false) {
        return "Enter name At least 3 carachters"
    }
    else if (regexEmail.test(inputemail.value) == false) {
        return "Enter email like name@gmail/yahoo.com"
    }
    else if (regexPassword.test(inputpassword.value) == false) {
        return "Enter password from a to z or 0 to 9 only 10 charcters and At least 5 "

    }
    return true;
}
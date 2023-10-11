const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

/*------------------------------------
Reusabel functions -------------------
--------------------------------------
*/

const showError = function(input,mesage){
  const controlForm = input.parentElement;
  controlForm.classList.add('error');
  const small = controlForm.querySelector('small');
  small.textContent=mesage; 
}

const showSuccess = function(input){
  const controlForm = input.parentElement;
  controlForm.classList.remove('error');
  controlForm.classList.add('success');
}
// check password match
const passwordMatch = function(inpur1,inpur2){
  if(inpur1.value!==inpur2.value){
    showError(inpur2,'Password is not Match')
  }
}

// Check email
const checkEmail = (email) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(email.value.trim())) {
        showSuccess(email)
    }
    else {
        showError(email, 'Email is not valid')
    }
};

// check length
const charecterRequired=function(chr,min,max){
  if(chr.value.length < min){
    showError(chr,`${getFieldName(chr)} must at least ${min} charecters`)
  }else if(chr.length > max){
    showError(chr,`${getFieldName(chr)} imust  be  less then ${max} charecters`);
  }
  else{
    showSuccess(chr);
  }
}
// checkFiled name

const getFieldName= function(e){
   return e.id.charAt(0).toUpperCase()+e.id.slice(1)
}
// check requirements

const checkRequired = function(inputArr){
  inputArr.forEach(input=>{
     if(input.value.trim() === '' || input === null){
   showError(input,`${getFieldName(input)} is required`)
}else{
  showSuccess(input)
}
  })

}
/*------------------------------------
Form AddEventListner -----------------
--------------------------------------
*/



form.addEventListener('submit',function(e){
  e.preventDefault()
  console.log('Asad And Habiba');
  checkRequired([userName,email,password,password2])
  charecterRequired(userName,3,15);
  charecterRequired(password,8,25);
  passwordMatch(password,password2);
  checkEmail(email);
})
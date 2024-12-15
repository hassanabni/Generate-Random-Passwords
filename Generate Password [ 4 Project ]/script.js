const input = document.querySelector('.input-btn');
const mainbutton = document.querySelector('.btn');
const copyBtn = document.querySelector('.copy-btn');

const length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuwxyz';
const number = '0123456789';
const symbol = "!@#$%^&*()_+~|}{:<>?-=/][;',.";


function createPassword () {
  let password = '';
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  if(password.length <= length){
    //second time
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
    //third time
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  input.value = password
  }
  
}


function ButtonClicked(){
    mainbutton.addEventListener("click",()=>{
        createPassword();
        copyPassword();
    })
}
ButtonClicked();

function copyPassword(){
    copyBtn.addEventListener("click", ()=>{
        // how to copy
        input.select();
        document.execCommand("copy");
    })
}

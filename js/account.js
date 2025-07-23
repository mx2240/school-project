
const account= document.getElementById('account')
const login= document.getElementById('login')
const register= document.getElementById('register')
const backRegister= document.getElementById('backRegisterr')
const backlogin= document.getElementById('backlogin')


// account.onclick =   
// 
// 
//+

backRegister.onclick  = function() {
    login.classList.remove('SwapDisplay')
    register.classList.add('SwapDisplay')

    
}


backlogin.onclick  = function () {

    register.classList.remove('SwapDisplay')
    login.classList.add('SwapDisplay')

    
}
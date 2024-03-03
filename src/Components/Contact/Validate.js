



let HandleValidate = (inputs)=>{

    let { user_name , user_email , message} = inputs
    const EmailValidator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    let Error = {}

    if(user_name === ''){
       Error.nameError = 'Name Field is empty !'
    }
    else if (user_name.length < 4){
        Error.nameError = 'Name Field must Have 4 characters !'
    }
    
    if(user_email === ''){
       Error.emailError = 'E-mail Field is empty !'
    }
    else if (!EmailValidator.test(user_email)){
        Error.emailError = 'inValid E-Mail !'
    }
    if(message === ''){
       Error.message = 'Message Field is empty !'
    }
    else if (message.length < 10){
        Error.message = 'Message Field Must Contains 10 Characters !'
    }

    return Error

}

export default HandleValidate

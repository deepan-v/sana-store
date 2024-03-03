
let HandleValidate = (inputs)=>{

    let {
        user_Number,
        user_Name,
        User_Gender,
        user_Address,
        user_Password
    } = inputs

    let Error = {}

    let val = user_Number.length < 11

    if( user_Name === ''){
       Error.NameError = 'Name Field is empty !'
    }
    else if (user_Name.length < 4){
        Error.NameError = 'inValid Name !'
    }

    if(user_Number === 0){
       Error.NumberError = 'Number Field is empty !'
       console.log(user_Number);
    }
    else if (user_Number.length < 10  ){
        console.log(user_Number.length);
        Error.NumberError = 'Invalid number !'
    }
    else if(!val){
        Error.NumberError = 'Invalid number !'
    }

    if(User_Gender ===''){
        Error.Gender = 'Fill Gender Field !'
    }
    
    if(user_Address === ''){
       Error.ErrorAddress = 'Address Field is empty !'
    }
    else if (user_Address.length <= 10 ){
        Error.ErrorAddress = ' invalid Address !'
    }
    
    if(user_Password === ''){
       Error.ErrorPassword = 'Password Field is empty !'
    }
    else if (user_Password.length < 6){
        Error.ErrorPassword = 'Password Field Must Contains 6 Characters !'
    }

    return Error

}

export default HandleValidate

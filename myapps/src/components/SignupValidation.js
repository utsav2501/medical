function validation(values) {
    
    let error = {}
    const name_pattern = /^[a-zA-Z]/
    const email_pattern = /^[^\$@]+@[^\$@]+\.[^\$@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.name ===""){
        error.name = "name should not be empty"
    }
    else if(!name_pattern.test(values.name)) {
        error.name = "name Didn't match"
    }else{
        error.name = ""
    }


    if(values.email ===""){
        error.email = "Email should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email Didn't match"
    }else{
        error.email = ""
    }


    if(values.password ===""){
        error.password = "password should not be empty"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "password Didn't match"
    }else{
        error.password = ""
    }
    return error;
}

export default validation;
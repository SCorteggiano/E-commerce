export const validateRegister = (registerValues: {
    mail: string,
    password: string,
    name: string,
    phone:string,
    address: string,
}) =>{
    let errors = {};
    if(!registerValues.mail){
        errors = {...errors, mail: "Email is required"};
    }
    if(!registerValues.password){
        errors = {...errors, password: "Password is required"};
    }
    if(registerValues.password.length < 8){
        errors = {...errors, password: "Password must be at least 8 characters"};
    }
    if(!/[a-z]/.test(registerValues.password)){
        errors = {...errors, password: "Password must contain at least one lowercase letter"};
    }
    if(!/\d/.test(registerValues.password)){
        errors = {...errors, password: "Password must contain at least one number"};
    }
    if(!registerValues.name){
        errors = {...errors, name: "Name is required"};
    }
    if(!registerValues.phone){
        errors = {...errors, phone: "Phone is required"};
    }
    if(/^\d+$/.test(registerValues.phone)){
        errors = {...errors, password: "Invalid phone number"};
    }
    if(!registerValues.address){
        errors = {...errors, address: "Address is required"};
    }

    return errors;    
};

export const validateLogin = (loginValues: {
    mail: string,
    password: string,
}) => {
    let errors = {};
    if(!loginValues.mail){
        errors = {...errors, mail: "Email is required"};
    }
    if(!loginValues.password){
        errors = {...errors, password: "Password is required"};
    }

    return errors;

};


export const validateRegister = (registerValues: {
    email: string,
    password: string,
    name: string,
    phone:string,
    address: string,
}) =>{
    let errors = {};
    if(registerValues.password.length < 8){
        errors = {...errors, password: "Password must be at least 8 characters"};
    }
    if(!/[a-z]/.test(registerValues.password)){
        errors = {...errors, password: "Password must contain at least one lowercase letter"};
    }
    if(!/\d/.test(registerValues.password)){
        errors = {...errors, password: "Password must contain at least one number"};
    }
    return errors;    
};

export const validateLogin = (loginValues: {
    email: string,
    password: string,
}) => {
    let errors = {};
    if(!loginValues.email){
        errors = {...errors, email: "Email is required"};
    }
    if(!loginValues.password){
        errors = {...errors, password: "Password is required"};
    }

    return errors;

};


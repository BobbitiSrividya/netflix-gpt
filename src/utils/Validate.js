

export const checkValidateData =  (email, password,confirmPassword, isSignInForm) => {

        const isEmailValid = /^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/.test(email);
        const  isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,}$/.test(password);
        console.log(confirmPassword+"  "+password);

        if(!isEmailValid) return "Email Id is not valid";
        if(!isPasswordValid) return "Password is not valid";
        if(!isSignInForm && confirmPassword !== password) return "Password is not matching";

        return null;

}
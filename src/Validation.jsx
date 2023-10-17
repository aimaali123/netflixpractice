import React from 'react'

const Validation = (formvalues) => {
  const errors={};

  const email_pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
//eight characters including one uppercase letter, one lowercase letter, and one number or special character.
const password_pattern=/^[a-zA-Z0-9!@#$%^&*]{4,60}$/;

  if(formvalues.email===""){
    errors.email="Please enter a valid email.";
  }
  else if (!email_pattern.test(formvalues.email)){
    errors.email="Please enter a valid email";
  }
if(formvalues.password===""){
errors.password="Your password must contain between 4 and 60 characters.";
}
else if (!password_pattern.test(formvalues.password)){
  errors.password=" Password did not match";
}
else{
    errors.password="";
  }
console.log(errors);

  return errors;
}

export default Validation;

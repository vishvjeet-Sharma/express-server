const validateEmail = (email) => {
    var validEmail = /^([a-zA-Z0-9\._]+)@successive.tech/;
    return validEmail.test(email);
  };
  export default validateEmail;
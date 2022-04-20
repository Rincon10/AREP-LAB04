const validateInfoSignUp = values => {
    const errors = {};
    const { email, password, password2 } = values;

    for (const property in values) {
        if (!values[property]) errors[property] = `${property} is mandatory!!`;
    }

    const regularExp =
        /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}/;
    if (email && !regularExp.test(email)) errors.email = 'Invalid email';
    if (password && password.length < 5)
        errors.password = 'The password must be longer than 5 letters';
    if (password2 && password2.length < 5)
        errors.password = 'The password must be longer than 5 letters';
    else if (password2 !== password)
        errors.password2 = 'The passwords doesnt match';
    return errors;
};

export default validateInfoSignUp;

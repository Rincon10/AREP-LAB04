const fields = ['id', 'label', 'type'];

const getTextFieldObject = values => {
    const object = {};
    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        object[field] = values[i];
    }
    return object;
};

const getTextFields = (
    inputs = [
        ['email', 'Email Address', 'email'],
        ['nickname', 'Nickname', 'text'],
        ['password', 'Password', 'password'],
        ['password2', 'Password confirmation', 'password'],
    ],
) => {
    const array = [];

    inputs.forEach(input => {
        array.push(getTextFieldObject(input));
    });
    return array;
};

export default getTextFields;

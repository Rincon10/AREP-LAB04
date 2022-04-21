import validateInfoLogin from 'components/helpers/validateInfoLogin';

/* import { types } from 'components/types/types'; */
import { UserPool } from 'components/userpool/UserPool';
import { UserContext } from 'context/UserContext';
import { useContext, useState } from 'react';
import swal from 'sweetalert';
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import { types } from 'components/types/types';
import _ from 'lodash';

//validateFunction must be a customHook
const useForm = (validateFunction = validateInfoLogin, loginB = true) => {
    const initData = {
        email: '',
        nickname: '',
        name: '',
        password: '',
        password2: '',
    };

    const [data, setData] = useState(initData);
    const [errors, setErrors] = useState({});
    const { dispatch } = useContext(UserContext);

    const login = () => {
        const { email, password } = data;

        const cognitoUser = new CognitoUser({
            Username: email,
            Pool: UserPool,
        });

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
        });

        cognitoUser.authenticateUser(authDetails, {
            onSuccess: async dat => {
                const action = {
                    type: types.login,
                    payload: data,
                };

                await dispatch(action);

                window.location.href = '/home';
            },
            onFailure: err => {
                const { message } = err;
                swal({
                    title: 'Login',
                    icon: 'error',
                    text: `${message}`,
                    timer: '5000',
                });
            },
        });
    };

    const signUp = () => {
        const { email, password } = data;

        UserPool.signUp(email, password, [], null, (err, dat) => {
            if (err) {
                swal({
                    title: 'SignUp',
                    icon: 'error',
                    text: 'Oops we cant create the user. please try again',
                    timer: '5000',
                });
                console.log(err);
            } else {
                console.log(dat);
                swal({
                    title: 'registered',
                    icon: 'success',
                    text: 'successfully registered',
                    timer: '6000',
                });
                setData(initData);
                setInterval(() => {
                    window.location.href = '/login';
                }, 5000);
            }
        });
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async event => {
        event.preventDefault();

        const currentErrors = await validateFunction(data);
        setErrors(currentErrors);
        if (_.isEqual({}, currentErrors)) {
            if (loginB) login();
            else signUp();
        }
    };

    return { handleChange, handleSubmit, errors };
};

export default useForm;

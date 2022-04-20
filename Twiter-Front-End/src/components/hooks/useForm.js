import validateInfoLogin from 'components/helpers/validateInfoLogin';
import { userApiclient } from 'components/services/userApiClient';
import { types } from 'components/types/types';
import { UserPool } from 'components/userpool/UserPool';
import { UserContext } from 'context/UserContext';
import _ from 'lodash';
import { useContext, useState } from 'react';
import swal from 'sweetalert';

//validateFunction must be a customHook
const useForm = (validateFunction = validateInfoLogin, loginB = true) => {
    const initData = {
        email: '',
        nickname: '',
        password: '',
        password2: '',
    };

    const [data, setData] = useState(initData);
    const [errors, setErrors] = useState({});
    const { user, dispatch } = useContext(UserContext);

    const login = () => {};

    const signUp = () => {
        const { email, password } = user;

        UserPool.signUp(email, password, [], null, (err, data) => {
            if (err) {
                swal({
                    title: 'Login',
                    icon: 'error',
                    text: 'Oops we cant create the user. please try again',
                    timer: '5000',
                });
            } else {
                swal({
                    title: 'registered',
                    icon: 'success',
                    text: 'successfully registered',
                    timer: '6000',
                });
                setData(initData);
                setInterval(() => {
                    window.location.href = '/login';
                }, 6000);
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

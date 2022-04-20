import validateInfoLogin from 'components/helpers/validateInfoLogin';
import { userApiclient } from 'components/services/userApiClient';
import { types } from 'components/types/types';
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
    const { dispatch } = useContext(UserContext);

    const login = () => {
        /*         userApiclient
            .getToken(data)
            .then(tokenResponse => {
                updateUser(tokenResponse);
            })
            .catch(() => {
                swal({
                    title: 'Login',
                    icon: 'error',
                    text: 'Oops something went wrong. please try again',
                    timer: '5000',
                });
            }); */
    };

    const signUp = () => {
        /*         userApiclient
            .postUser({ ...data, bio: '' })
            .then(() => {
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
            })
            .catch(() => {
                swal({
                    title: 'Login',
                    icon: 'error',
                    text: 'Oops we cant create the user. please try again',
                    timer: '5000',
                });
            }); */
    };

    const updateUser = async t => {
        const { email } = data;

        userApiclient
            .getUserByEmail(email, t.token)
            .then(user => {
                user['token'] = t.token;
                setData({});
                const action = {
                    type: types.login,
                    payload: user,
                };
                dispatch(action);
                window.location.href = '/home';
            })
            .catch(() => {
                swal({
                    title: 'Login',
                    icon: 'error',
                    text: 'error',
                    timer: '5000',
                });
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

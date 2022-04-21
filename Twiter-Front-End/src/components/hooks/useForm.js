import validateInfoLogin from 'components/helpers/validateInfoLogin';

/* import { types } from 'components/types/types'; */
import { UserPool } from 'components/userpool/UserPool';
import { UserContext } from 'context/UserContext';
import _ from 'lodash';
import { useContext, useState } from 'react';
import swal from 'sweetalert';
import { types } from 'components/types/types';

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

    const login = () => {};

    const signUp = () => {
        const { email, password } = data;

        UserPool.signUp(email, password, [], null, (err, dat) => {
            if (err) {
                swal({
                    title: 'Login',
                    icon: 'error',
                    text: 'Oops we cant create the user. please try again',
                    timer: '5000',
                });
                console.log(err);
            } else {
                console.log(dat);
                delete data['password2'];
                const action = {
                    payload: data,
                };
                dispatch(action);
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

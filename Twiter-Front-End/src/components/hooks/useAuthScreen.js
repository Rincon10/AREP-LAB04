import { useEffect, useState } from 'react';
import getTextFields from 'components/helpers/getTextFields';

const useAuthScreen = inputs => {
    const [fields, setFields] = useState([]);

    useEffect(() => {
        const realFields = getTextFields(inputs);
        setFields(realFields);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { fields };
};

export default useAuthScreen;

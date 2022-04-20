import PropTypes from 'prop-types';
import React from 'react';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextFieldContainer from 'components/ui/TextFieldContainer';
import useForm from 'components/hooks/useForm';
import validateInfoLogin from 'components/helpers/validateInfoLogin';

import '../../css/Form.css';

const Form = ({
    title,
    fields,
    aLink,
    href,
    validateInfo = validateInfoLogin,
}) => {
    const { handleChange, handleSubmit, errors } = useForm(
        validateInfo,
        href === 'singup',
    );

    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Avatar sx={{ m: 1 }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                {title}
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
            >
                <TextFieldContainer
                    textFieldItems={fields}
                    errors={errors}
                    handleChange={handleChange}
                    key={href}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    {title}
                </Button>
                <Grid container>
                    <Grid item>
                        <Link href={href} variant="body2">
                            {aLink}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

Form.propTypes = {
    aLink: PropTypes.string,
    fields: PropTypes.array,
    href: PropTypes.string,
    title: PropTypes.string,
    validateInfo: PropTypes.func,
};

export default Form;

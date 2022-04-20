import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useAuthScreen from 'components/hooks/useAuthScreen';
import Form from 'components/ui/Form';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';

const theme = createTheme();

const LoginScreen = () => {
    const { fields } = useAuthScreen([
        ['email', 'Email Address', 'email'],
        ['password', 'Password', 'password'],
    ]);

    const URL =
        'https://play-lh.googleusercontent.com/oaZE2zvOklsacIJfPJmiRtupe-5DTCXdL6Ut1f45_QRwM6C-yymk2ND_SeJJVIKaXg=w720-h310';

    const backgroundProperties = {
        backgroundImage: `url(${URL})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} sx={backgroundProperties} />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Form
                        fields={fields}
                        title={'Log In'}
                        aLink={"Don't have an account? Sign Up"}
                        href={'singup'}
                    />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default LoginScreen;

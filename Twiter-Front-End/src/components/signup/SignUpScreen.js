import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useAuthScreen from 'components/hooks/useAuthScreen';
import Form from 'components/ui/Form';
import { Grid } from '@mui/material';
import '../../css/signup.css';
import validateInfoSignUp from 'components/helpers/validateInfoSignUp';

const theme = createTheme();

const SignUpScreen = () => {
    const { fields } = useAuthScreen();

    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                component="main"
                sx={{
                    marginTop: -5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <CssBaseline />
                <Form
                    fields={fields}
                    title={'Sign Up'}
                    aLink={'You already have an account? Log In'}
                    href={'login'}
                    validateInfo={validateInfoSignUp}
                />
            </Grid>
        </ThemeProvider>
    );
};

export default SignUpScreen;

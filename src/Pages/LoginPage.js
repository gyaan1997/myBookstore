import React from 'react';
import { Container, Typography } from '@mui/material';
import LoginButton from '../Components/Login';
import Signup from '../Components/Signup';
function LoginPage() {
    return (
        <Container component="main" maxWidth="xs" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
            <Typography component="h1" variant="h5">
                Please Sign Up or Log In to continue
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '50px' }} >
                <div><Signup /></div>
                <div style={{ marginLeft: '20px' }}> <LoginButton /></div>
            </div>
        </Container>
    );
}

export default LoginPage;

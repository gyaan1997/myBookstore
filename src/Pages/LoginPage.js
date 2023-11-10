import React from 'react';
import { Container, Typography } from '@mui/material';
import LoginButton from '../Components/Login';

function LoginPage() {
    return (
        <Container component="main" maxWidth="xs" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
            <Typography component="h1" variant="h5">
                Please login to continue
            </Typography>
            <LoginButton />
        </Container>
    );
}

export default LoginPage;

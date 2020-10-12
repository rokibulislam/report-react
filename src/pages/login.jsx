import React from 'react'
import SignIn from '../components/signin'
import AuthLayout from '../layout/AuthLayout';

const Login = () => {
    return ( 
    <AuthLayout>
        <SignIn/>
    </AuthLayout>
    );
}
 
export default Login;
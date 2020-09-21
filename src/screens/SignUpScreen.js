import React from 'react';
import { StyleSheet } from 'react-native';
import SignForm from '../components/SignForm';
import NavButton from '../components/NavButton';

const SignUpScreen = () => {
    return (
        <>
            <SignForm submitTitle='Sign up' />
            <NavButton text='Already have an account? Sign in instead' routeName='Signin' />
        </>
    );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
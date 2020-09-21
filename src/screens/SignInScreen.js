import React from 'react';
import { StyleSheet } from 'react-native';
import SignForm from '../components/SignForm';
import NavButton from '../components/NavButton';

const SignInScreen = () => {
    return (
        <>
            <SignForm submitTitle='Sign in' />
            <NavButton text='Dont have an account yet? Sign up free' routeName='Signup' />
        </>
    );
};

SignInScreen.navigationOptions = () => {
    return {
        //header: () => false,
        title: 'Sign in'
    };
};

const styles = StyleSheet.create({});

export default SignInScreen;
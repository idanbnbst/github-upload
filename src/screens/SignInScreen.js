import React from 'react';
import { StyleSheet, View } from 'react-native';
import SignForm from '../components/SignForm';
import NavButton from '../components/NavButton';
import Spacer from '../components/Spacer';

const SignInScreen = () => {
    return (
        <View style={styles.container}>
            <SignForm submitTitle='Sign in' />
            <NavButton text='Dont have an account yet? Sign up free' routeName='Signup' />
        </View>
    );
};

SignInScreen.navigationOptions = () => {
    return {
        header: () => false,
        //title: 'Sign in'
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 300
    }
});

export default SignInScreen;
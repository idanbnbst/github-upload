import React from 'react';
import { StyleSheet, View } from 'react-native';
import SignForm from '../components/SignForm';
import NavButton from '../components/NavButton';

const SignUpScreen = () => {
    return (
        <View style={styles.container}>
            <SignForm submitTitle='Sign up' />
            <NavButton text='Already have an account? Sign in instead' routeName='Signin' />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 300
    }
});

export default SignUpScreen;
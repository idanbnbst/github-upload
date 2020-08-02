import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';

const SignForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Input label='Email' value={email} onChangeText={setEmail} autoCapitalize='none' autoCorrect={false} />
            <Input secureTextEntry label='Password' value={password} onChangeText={setPassword} autoCapitalize='none' autoCorrect={false} />
            <Button title='Sign in' onPress={() => console.log('Sign in button pressed')} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SignForm;
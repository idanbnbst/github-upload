import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignForm = ({ submitTitle }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Input label='Email' value={email} onChangeText={setEmail} autoCapitalize='none' autoCorrect={false} />
            <Input secureTextEntry label='Password' value={password} onChangeText={setPassword} autoCapitalize='none' autoCorrect={false} />
            <Button title={submitTitle} onPress={() => console.log('submitted form')} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SignForm;
import React, { useEffect, useContext } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const ResolveAuthScreen = () => {
    const { tryLocalSignIn } = useContext(AuthContext);

    useEffect(
        () => {
            tryLocalSignIn();
        }, []);

    return (
        <View>
            <ActivityIndicator size='large' style={styles.container} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ResolveAuthScreen;
import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const ResolveAuthScreen = () => {
    const { tryLocalSignIn } = useContext(AuthContext);

    useEffect(() => {
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
        justifyContent: 'center',
        marginTop: 100
    }
});

export default ResolveAuthScreen;
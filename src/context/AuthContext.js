import createDataContext from './createDataContext';
import { navigate } from '../navigationRef';

import * as Google from 'expo-google-app-auth';
import * as firebase from 'firebase';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'sign_in':
            return { token: action.payload };
        case 'test':
            return { errorMessage: action.payload };
        default:
            return state;
    }
};

const tryLocalSignIn = (dispatch) => () => {
    dispatch({ type: 'test', payload: 'test' })
    //navigate('Signup');
}

const signUp = dispatch => async ({ email, password }) => {
    try {
        firebase.auth().
            createUserWithEmailAndPassword(email, password)
            .then(() => {
                dispatch({ type: 'first_sign_in', payload: true });
            })
            .catch(err => {
                dispatch({ type: 'add_duplicate_err', payload: err.message });
                console.log('Sign Up Error: ', err.message);
            });
        /*  Save the json web token to local device storage
            await AsyncStorage.setItem('token', token); */
    } catch (err) {
        // if sign up fail reflect error message

    }
}

const signIn = dispatch => async ({ email, password }) => {
    try {
        // const response = await authApi.post('/signin', { username, password });
        firebase.auth().
            signInWithEmailAndPassword(email, password)
            .catch(err => {
                // Error occured ! Are you sure you typed everything right?
                dispatch({ type: 'sign_in_error', payload: err.message });
                console.log('Sign In Error: ', err.message);
            });
        /* await AsyncStorage.setItem('token', response.data.token); */
    } catch (err) {
        console.log('Sign in: ', err.message);
    }
}

const signOut = dispatch => async () => {
    /* await AsyncStorage.removeItem('token'); */
    firebase.auth().signOut();
    dispatch({ type: 'sign_out' });
    navigate('loginFlow');
}

const signInWithGoogle = dispatch => async () => {
    try {
        const result = await Google.logInAsync({
            androidClientId: googleCredentials.androidClientId,
            iosClientId: googleCredentials.iosClientId,
            scopes: ['profile', 'email'],
        });

        // On Google sign in success
        if (result.type === 'success') {
            this.onSignIn(result);
            dispatch({ type: 'sign_in', payload: result.accessToken });
        } else {
            Toast.show('Action cancelled by the user', Toast.LONG);
        }
    } catch (e) {
        console.log(e);
    }
}



const clearErrorMessages = dispatch => () => {
    dispatch({ type: 'clear_error', payload: '' });
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signUp, signIn, signOut, signInWithGoogle, clearErrorMessages, tryLocalSignIn },
    { token: null, errorMessage: '', isNewUser: false }
);
import React from 'react';
import { Button } from 'react-native-elements'
import { withNavigation } from 'react-navigation';

const NavButton = ({ navigation, text, routeName}) => {
    return <Button title={text} onPress={() => navigation.navigate(routeName)} />
};

export default withNavigation(NavButton);
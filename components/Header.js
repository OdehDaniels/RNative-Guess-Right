import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        paddingTop: 26,
        backgroundColor: '#B20005',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    }
});

export default Header

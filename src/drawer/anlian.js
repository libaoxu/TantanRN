import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';


const Anlian = () => (
    <Text>匿名暗恋表白aaaa</Text>
);

const AnlianScreen = StackNavigator({
    Buttons: {
        screen: Anlian,
        path: '/',
        navigationOptions: ({ navigation }) => ({
            title: '匿名暗恋表白',
            headerStyle:{
                backgroundColor:'#BB3D00'
            },
            headerTitleStyle:{
                color:'white',
                paddingLeft: 50
            },
            headerLeft: (
                <Icon
                    name="menu"
                    size={30}
                    type="entypo"
                    style={{ paddingLeft: 10 }}
                    onPress={() => navigation.navigate('DrawerOpen')}
                    color="white"
                />
            ),
        }),
    },

});

export default AnlianScreen;
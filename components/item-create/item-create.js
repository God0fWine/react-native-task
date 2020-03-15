import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
} from 'react-native';
import 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ItemCreate extends Component {

    styles = StyleSheet.create({

        cardImage: {
            margin: 10,
            marginLeft: 20,
            marginBottom: 5,
            width: 150,
            height: 150,

        },

        textAlign: {
            position: 'absolute',
            bottom: 0,
            left: 0
        },

        titleCard: {
            fontSize: 16,
            fontWeight: '900',
            color: '#ff0000',
        },
    });


    render() {

        const { adress, id, name, func } = this.props;
        return (
            <TouchableOpacity onPress={func}>
                <ImageBackground
                    style={this.styles.cardImage}
                    source={{ uri: adress }}
                    key={id}
                >
                    <View style={this.styles.textAlign}>
                        <Text style={this.styles.titleCard}>{name}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        );
    }
};
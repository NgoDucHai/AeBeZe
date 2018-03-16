'use strict';

import React, { Component } from 'react';
import {
    Text,
    ImageBackground
} from 'react-native';

export default class Slide extends Component<{}> {
    render() {

        return (
            <ImageBackground
                style={{
                    backgroundColor: '#33cabb',
                    position: 'absolute',
                    width: '100%',
                    height: 250,
                    justifyContent: 'center',
                }}
                source={{ uri: 'https://bluejayofhappiness.files.wordpress.com/2016/11/bluejay_background1.jpg?w=1180&h=610&crop=1' }}
            >
                <Text
                    style={{
                        backgroundColor: 'transparent',
                        fontSize: 18,
                        paddingLeft:20,
                        fontWeight: 'bold'
                    }}
                >
                    Happiness
                </Text>
                <Text
                    style={{
                        backgroundColor: 'transparent',
                        fontSize: 14,
                        paddingLeft: 20,
                    }}
                >
                    ( Permagasm ){"\n"}
                    20m
                </Text>
                <Text
                    style={{
                        backgroundColor: 'transparent',
                        fontSize: 24,
                        paddingTop: 80,
                        paddingLeft:20,
                        fontWeight: 'bold'
                    }}
                >
                    Enjoy life {"\n"}
                    to the fullest
                </Text>
            </ImageBackground>
        );
    }
}


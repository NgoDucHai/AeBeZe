import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { height, width } = Dimensions.get('window');

const images = [
    'https://unsplash.it/300/?random',
    'https://unsplash.it/350/?random',
    'https://unsplash.it/400/?random',
    'https://unsplash.it/450/?random',
    'https://unsplash.it/500/?random',
    'https://unsplash.it/550/?random',
    'https://unsplash.it/600/?random'
];

export default class CarouselScroll extends Component {
    renderItem = ({ item }) => {
        return (
            <Image source={{ uri: item }} style={styles.logoStyle} />
        );
    };

    render () {
        return (
            <View  style={{ backgroundColor: '#53d3c6'}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Carousel
                        firstItem={1}
                        sliderWidth={width}
                        itemWidth={width / 3}
                        data={images}
                        renderItem={this.renderItem}
                        containerCustomStyle={{ overflow: 'visible' }}
                        contentContainerCustomStyle={{ overflow: 'visible' }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logoStyle: {
        width: width / 3,
        height: width / 3
    }
});


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { View, ScrollView, Text, StatusBar, SafeAreaView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderEntry from './components/SliderEntry';
import Slide from './components/Slide';

import styles, {colors} from "./styles/index.style";
import {itemWidth, sliderWidth} from "./styles/SliderEntry.style";
import {ENTRIES1, ENTRIES2} from "./static/entries";
import { scrollInterpolators, animatedStyles } from './utils/animations';


type Props = {};

export default class App extends Component<Props> {
    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: 1
        };
    }

    _renderItem ({item, index}) {
        return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
    }

    makeSeries (number, title) {
        return (
            <View style={styles.exampleContainer}>
                <Header style={{
                    backgroundColor:'#89bdd3',
                    height: 70,
                }}>
                    <Left>
                        <Title style={{ fontSize: 30, color: 'white' }}>AeBeZe</Title>
                    </Left>
                    <Body>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon ios='ios-settings' android="md-settings" style={{fontSize: 20, color: 'white'}}/>
                        </Button>
                    </Right>
                </Header>
                <View style={{ backgroundColor: '#e3e3e3', marginTop:0, height:250}}>
                    <Slide></Slide>
                </View>
                <Text style={styles.title}>{ 'Featured drugs'}</Text>
                <Text style={styles.subtitle}>{title}</Text>
                <Carousel
                    data={ENTRIES2}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    inactiveSlideScale={0.95}
                    inactiveSlideOpacity={1}
                    enableMomentum={true}
                    activeSlideAlignment={'start'}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    activeAnimationType={'spring'}
                    activeAnimationOptions={{
                        friction: 4,
                        tension: 40
                    }}
                />
            </View>
        );
    }


    render() {
        const series = this.makeSeries(2, 'Momentum | Left-aligned | Active animation');

        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <StatusBar
                        translucent={true}
                        backgroundColor={'rgba(0, 0, 0, 0.3)'}
                        barStyle={'light-content'}
                    />
                    { this.gradient }
                    <ScrollView
                        style={styles.scrollview}
                        scrollEventThrottle={100}
                        directionalLockEnabled={true}
                    >
                        { series }
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
} from 'react-native';
import ItemCreate from '../item-create';
import { connect } from 'react-redux';
import Unsplash from '../api';

class ItemList extends Component {

    unsplash = new Unsplash(1);

    state = {
        images: []
    };

    styles = StyleSheet.create({
        screen: {
            flex: 1,
            flexDirection: 'row',
            flexWrap: "wrap"
        },
        scrollView: {
            backgroundColor: 'grey',
        },
    });

    onLoaded = (newImages) => {
        this.setState(prevState => {
            return {
                images: [...prevState.images, newImages]
            }
        });
    };


    funcPress = (adress) => {

        const action = {
            type: 'PRESS',
            data: {
                text: adress
            }
        };
        this.props.dispatch(action);
        this.props.navigation.navigate('Details');
    };

    isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };

    scrollToEndHandler() {
        this.addPictures(this.unsplash.nextPage());
    };

    addPictures(resource) {
        resource.getPhotos().then(items => {
            let result = items.map(photo => {
                return (
                    <ItemCreate adress={photo.image} key={photo.name} name={photo.author} func={() => this.funcPress(photo.fullImage)} />
                );
            });
            this.onLoaded(result);
        }).catch(e => console.log(e));
    };

    componentDidMount() {
        this.addPictures(this.unsplash);
    };

    render() {
        const { images } = this.state;
        
        return (
            <ScrollView style={this.styles.scrollView}
                onScroll={({ nativeEvent }) => {
                    if (this.isCloseToBottom(nativeEvent)) {
                        this.scrollToEndHandler()
                    }
                }}>
                <View style={this.styles.screen}>
                    {images}
                </View>
            </ScrollView>
        );
    };
};

export default connect()(ItemList);

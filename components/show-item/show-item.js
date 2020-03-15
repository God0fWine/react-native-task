import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
} from 'react-native';
import { connect } from 'react-redux';

class ShowItem extends Component {

    styles = StyleSheet.create({
        bigPicture: {
            flex: 1,
            maxWidth: 'auto',
            resizeMode: 'stretch'
        },
    });

    render() {
        return (
            <Image source={{ uri: this.props.image }} style={this.styles.bigPicture} />
        );
    };
};

const mapStateToProps = (state) => {
    return {
        image: state
    };
};

export default connect(mapStateToProps)(ShowItem);



import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import CardItem from './common/CardItem';
import * as action from '../actions';

class ListItem extends Component {
    render() {
       // console.log(this.props.library);
        return (
        <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(this.props.library.id)}
        >
            <View>
            <CardItem>
             <Text style={Styles.textStyle}>
               {this.props.library.title}
             </Text>
           </CardItem>
           </View>
        </TouchableWithoutFeedback>);
    }

}
const Styles = {
    textStyle: {
     fontSize: 18,
     paddingLeft: 15
    }
};

export default connect(null, action)(ListItem);

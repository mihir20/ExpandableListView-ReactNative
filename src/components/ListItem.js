import React, { Component } from 'react';
import { Text } from 'react-native';
import CardItem from './common/CardItem';

class ListItem extends Component {
    render() {
       // console.log(this.props.library);
        return (
        <CardItem>
          <Text style={Styles.textStyle}>
            {this.props.library.title}
          </Text>
        </CardItem>);
    }

}
const Styles = {
    textStyle: {
     fontSize: 18,
     paddingLeft: 15
    }
};

export default ListItem;

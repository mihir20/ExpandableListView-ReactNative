import React, { Component } from 'react';
import { Text } from 'react-native';
import CardItem from './common/CardItem';

class ListItem extends Component {
    render() {
       // console.log(this.props.library);
        return (
        <CardItem>
          <Text>
            {this.props.library.title}
          </Text>
        </CardItem>);
    }

}

export default ListItem;

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Header from './components/common/Header';


class App extends Component {


  render() {
    return (
      <Provider store={createStore(reducers)} >
      <View>
        <Header headerText="Expand" />
      </View>
      </Provider>
  );
  }
}

export default App;
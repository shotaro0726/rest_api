import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      rest: [],
    };
  }

  componentDidMount() {
    fetch('http:..localhost:8000/api/v1/rest/')
    .then(response => response.json())
    .then(json => this.setState({rest: json}))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        {this.state.rest.map(item => (
          <Text key={item.name}>
            <Item item={item}/>
          </Text>
        ))}
      </ScrollView>
      </View>
    );
  }
}

const Item = props => (
  <Text style={styles.item}>
    {props.item.name}:{props.item.rest}
  </Text>
);

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 50,
  },
  item: {
    fontSize: 30
  },
});
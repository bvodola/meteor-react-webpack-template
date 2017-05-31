import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';

Meteor.connect('ws://192.168.0.107:3000/websocket');

class App extends Component {

  render() {
    console.log('tasks', this.props.tasks);
    return (
     <div>
        <h1>React Template</h1>
      </div>);
  }
}

export default createContainer( params => {
  const handle = Meteor.subscribe('tasks');

  return {
    tasks: Meteor.collection('tasks').findOne()
  };
}, App)

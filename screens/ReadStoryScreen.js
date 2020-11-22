import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class StoryScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Read A Story</Text>
        </View>
      );
    }
  }
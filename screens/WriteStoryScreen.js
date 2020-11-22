import React from 'react';
import { Text, View, TextInput,StyleSheet, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase'
import db from '../config.js'

SubmitStory = async()=>{
  db.collection("title").doc(this.state.scannedBookId).update({
    "title": false
  })
  db.collection("author").doc(this.state.scannedStudentId).update({
    "author": firebase.firestore.FieldValue.increment(1)
  })
  db.collection("story").doc(this.state.scannedStudentId).update({
    "story": firebase.firestore.FieldValue.increment(1)
  })
}

export default class WriteScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <p>Story Title</p>
          <TextInput style={styles.inputBox} />
          <p>Story Author</p>
          <TextInput style={styles.inputBox} />
          <p>Write Your Story</p>
          <TextInput style={styles.inputBox} />
          <TouchableOpacity 
              style={styles.scanButton} onPress = {this.submitStory}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    inputBox: {
      marginTop: 100,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 2,
      outline: 'none',
    } ,
    scanButton:{
      backgroundColor:'#EDC0BF',
      width: 50,
      borderWidth:1.5,
     }
  })
  
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableOpacity,Image, Alert } from 'react-native';

import * as firebase from 'firebase';

import { Form, Item, Input, Label, Button } from 'native-base'


export default class SignupScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            username:""
        }
    }
    static navigationOptions = {
        title: "Sign Up",
        header: null
    }


    signUpUser = (username,email,password) => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then( authenticate => {
                return authenticate.user.updateProfile({
                    displayName: username
                })
                .then(() => {this.props.navigation.replace("Home")})
                .catch(error=> Alert.alert(error.message))
            })
            .catch(error => {Alert.alert(error.message)} );
    };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="position" enabled>
          <View style={styles.logoContainer}>
            <Image source={require('../assets/logo.png')}/>
            <Text>LearnCodeOnline.in</Text>
          </View>
          <Form style={styles.form}>
            <Item floatingLabel>
                <Label>Email</Label>
                <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onChangeText = { email => this.setState({ email })}
                />
            </Item>
            <Item floatingLabel>
                <Label>Password</Label>
                <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="default"
                    secureTextEntry={true}
                    onChangeText = { password => this.setState({ password })}
                />
            </Item>
            <Item floatingLabel>
                <Label>User Name</Label>
                <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="default"
                    onChangeText = { username => this.setState({ username })}
                />
            </Item>
            <Button style={styles.button} full rounded 
                onPress = { () => {
                    this.signUpUser(
                        this.state.username,
                        this.state.email,
                        this.state.password
                    )
                } }
            >
                <Text style={styles.buttonText}>Sign Up</Text>
            </Button>
          </Form>
          <View style={styles.footer}>
            <Text>OR</Text>
            <TouchableOpacity onPress= { () => {this.props.navigation.goBack()} }>
                <Text>Already have an Account ? Signin here.</Text>
            </TouchableOpacity>
          </View>  
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    logoContainer: {
      alignItems: "center",
      marginTop: 100,
      marginBottom: 100
    },
    form: {
      padding: 20,
      width: "100%"
    },
    button: {
      marginTop: 20
    },
    buttonText: {
      color: "#fff"
    },
    footer: {
      alignItems: "center"
    }
  });
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import Para from '../components/Para';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import colors from '../config/colors';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const SignIn = () => {
  return (
    <Screen style={styles.container}>
      <View style={styles.logoSec}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.heading}>Welcome To Blood Bank</Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Let's Get Started!</Text>
        <Para>Please login to your account</Para>
      </View>
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'
          name='email'
          placeholder='Email'
          textContentType='emailAddress'
        />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          name='password'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
        />
        <Text style={{ color: colors.primary }}>Forgot Password?</Text>
        <View style={styles.buttonContainer}>
          <SubmitButton title='Sign In' />
        </View>
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  logoSec: {
    alignItems: 'center',
    marginBottom: 80,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 10,
  },
  heading: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 10,
  },
});

export default SignIn;

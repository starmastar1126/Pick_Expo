import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';
import AppContainer from '@navigations';

import i18n from "@utils/i18n";
i18n.setI18nConfig();

import * as firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyCO0aoGEC4VNb74h7xFOQzDBIvZ5_Tsir4",
    authDomain: "pick-aa5e2.firebaseapp.com",
    databaseURL: "https://pick-aa5e2.firebaseio.com",
    projectId: "pick-aa5e2",
    storageBucket: "pick-aa5e2.appspot.com",
    messagingSenderId: "255238314976",
    appId: "1:255238314976:web:d7444a422ba09bcf53e985",
    measurementId: "G-NH1HW72TDG",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

console.disableYellowBox = true;

export default class App extends Component {
    render() {
        return (
            <Provider store={store} >
                <PersistGate loading={null} persistor={persistor}>
                    <AppContainer />
                </PersistGate>
            </Provider>
        );
    }
}
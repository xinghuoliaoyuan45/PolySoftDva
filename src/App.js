import React from 'react';
import Dva from './utils/Dva';
import {AsyncStorage} from 'react-native'



import  Router from './Router';
import models from 'src/models';

const app = Dva({
	initialState: {},
	models: models,
	onError(e) {
		console.log('onError', e);
	},
});
let store = app.getStore()
const App = app.start(<Router store={store}/>)


export default App;

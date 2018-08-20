import React, {Component} from 'react'
import {create} from 'dva-core';
import {Provider} from 'react-redux'
import {StyleProvider} from 'native-base';
// import getTheme from '../native-base-theme/components';
// import platform from '../native-base-theme/variables/platform';


export default (options) => {
	const app = create(options);

	if (!GLOBAL.registered) options.models.forEach(model => app.model(model));
	GLOBAL.registered = true;
	app.start();

	const store = app._store;

	app.start = (container) => () => <Provider store={store}>{container}</Provider>;// 注意是两层 在 App.js start

	app.getStore = () => store;

	return app;
};

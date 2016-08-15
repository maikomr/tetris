import '../imports/ui/body.js';

import {Meteor} from 'meteor/meteor';
import {newGame, render} from '../imports/ui/body.js';

Meteor.startup(() => {
	newGame();
	setInterval(render, 30 );
});
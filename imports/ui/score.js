import {Template} from 'meteor/templating';
import {Meteor} from 'meteor/meteor';
import {Scores} from '../api/scores.js';
import './score.html';

Template.score.events({
	'click .delete'() {
		Meteor.call('scores.delete',this._id);
	}
});
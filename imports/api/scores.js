import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

export const Scores = new Mongo.Collection('scores');

Meteor.methods({
	'scores.insert'(name, score) {
		check(name,String);
		check(score,Number);
		if(typeof(Scores.findOne({name})) !== 'undefined') {
			Scores.update({name},{$set: {score}});
		} else {
			if(name.length === 0) name = 'Unknown';
			Scores.insert({name,score});
		}
	},
	'scores.delete'(id) {
		Scores.remove(id);
	}
});
'use strict';

var Mongoose = require("mongoose"),
		Schema = Mongoose.Schema;
		//ObjectId = Mongoose.Schema.Types.ObjectId;

var ninjaSchema = new Schema({
	name: {type: String, required: true, uniqueness: true, lowercase: true},
	health: {type: Number, min: 0, max: 99, default: 99},
	weapons: [{type: String, enum: ["daggers", "throwing stars", "nunchucks", "hands"], default: "hands"}],
	skills: [{type: String, enum: ["killing", "stealth", "yielding weapons"], default: "stealth"}],
	abilities: [{type: String, required: true}],
	zombieCollection: {type: Number, min: 0, default: 0}//don't know if this is right or not.
});

module.exports = Mongoose.model("Ninja", ninjaSchema)
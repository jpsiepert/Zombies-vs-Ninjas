'use strict';

var Mongoose = require("mongoose"),
	Schema = Mongoose.Schema,
	//ObjectId = Mongo.Schema.type.ObjectId;

 zombieSchema = new Schema ({
	name: {type: String, required: true, uniqueness: true},
	health: {type: Number, min: 0, max: 99, default: 99},
	appendages: {type: String, enum: ["legs", "arms", "fingers"], required: true},
	attacklevel: {type: Number, min: 5, max: 15, default: 10},
	ninjasConsumed: {type: Number, default: 0}
});

module.exports =  Mongoose.model("Zombie", zombieSchema)
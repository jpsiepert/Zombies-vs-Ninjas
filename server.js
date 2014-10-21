'use strict';

var Mongo = require("mongo"),
		Express = require("express"),
		Mongoose = require("mongoose"),
		port = 8888,
		app = Express();

var Ninja = require("./libs/models/ninjas"),
    Zombie = require("./libs/models/zombies");

var jimmyEatWorld = new Zombie({name: "Rotting Jimmy", health: 99, appendages: "legs", ninjasConsumed: 0});
var eatThoseBrains = new Zombie({name: "Brain Eater", health: 75, appendages: "arms", attacklevel: 11, ninjasConsumed: 1});


var awesomeSauce = new Ninja({name: "Awesome Sauce", weapons: "throwing stars", skills: "stealth", abilities: "all", zombieCollection: 2});

var killEm = new Ninja({name: "Kill 'Em", health: 75, weapons: "nunchucks", skills: "killing", abilities: "all", zombieCollection: 1});

jimmyEatWorld.save(function(err){
	if(err) throw err;
		console.log(jimmy);
});
eatThoseBrains.save(function(err){
	if(err) throw err;
		console.log(jimmy);
});
awesomeSauce.save(function(err){
	if(err) throw err;
		console.log(jimmy);
});
killEm.save(function(err){
	if(err) throw err;
		console.log(jimmy);
});

app.get("/zombies", function(req, res) {
	
	Zombie.find().exec(function(err, zombies){
		res.send(zombies)
});
});

app.get("/ninjas", function(req, res){
	console.log('ninjas')
	Ninja.find().exec(function(err, ninjas){
		if(err){
			res.send(err)
		} else
		res.send(ninjas)
	})
})

// console.log(jimmy)
// Mongoose.connect("mongodb://localhost/zombies");

app.listen(port, function(){
	console.log("zombies and ninjas are fighting on port", port);
})


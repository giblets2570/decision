let express = require('express');
module.exports = function (User) {
	let router = express.Router();
	let UserController = require('./user.controller')(User);
	let controller = new UserController();

	router.get('/',(req,res)=>controller.get(req,res));
	router.get('/:id',(req,res)=>controller.show(req,res));
	router.put('/:id',(req,res)=>controller.update(req,res));
	router.patch('/:id',(req,res)=>controller.update(req,res));
	router.delete('/:id',(req,res)=>controller.remove(req,res));
	router.post('/',(req,res)=>controller.create(req,res));
	
	return router;
}
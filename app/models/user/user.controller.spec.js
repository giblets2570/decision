'use strict';

let User = require('./user.model');
let UserController = require('./user.controller')(User);

describe('UserController', () => {
  let userController;
  beforeEach(() => {
    userController = new UserController();
  })


  it('should have the methods inherited from controller', function (){
    // console.log(userController);
    let req = {}, res = {};
    userController.get(req,res).then((data)=>{
    	
    });
  })

})
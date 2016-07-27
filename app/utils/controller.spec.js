'use strict';

let Controller = require('./controller');
let Model = {};

describe('Controller', () => {
  let controller;
  beforeEach(() => {
    controller = new Controller(Model);
  });


  it('should have methods', function (){

    for(let prop in controller){
      console.log(prop);
    }
    console.log(Controller);
    console.log(controller.get);
    // expect(doc.first_name).to.equal('henry')
  })

})
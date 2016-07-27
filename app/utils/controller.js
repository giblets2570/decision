var _  = require('lodash');
var co = require('co');

class Controller {
  constructor(Model){
    this.Model = Model;
  };
  create(req,res) {
    let self = this;
    co(function* () {
      let empty_model = new self.Model();
      let filled_model = _.merge(empty_model,req.body);
      let response = yield filled_model.save();
      return response;
    })
    .then((data)=>res.json(data))
    .catch((err)=>res.json(err));
  };
  show(req,res) {
    let self = this;
    co(function* () {
      let object = yield self.Model.findById(req.params.id).exec();
      return object;
    })
    .then((data)=>res.json(data))
    .catch((err)=>res.json(err));
  };
  get(req,res) {
    let self = this;
    co(function* () {
      let objects = yield self.Model.find().exec();
      return objects;
    })
    .then((data)=>res.json(data))
    .catch((err)=>res.json(err));
  };
  update(req,res) {
    let self = this;
    co(function* () {
      let object = yield self.Model.findById(req.params.id).exec();
      let updated = _.merge(object,req.body);
      for (let prop in req.body) updated.markModified(prop);
      let response = yield updated.save()
      return response;
    })
    .then((data)=>res.json(data))
    .catch((err)=>res.json(err));
  };
  remove(req,res) {
    let self = this;
    co(function* () {
      let object = yield self.Model.findById(req.params.id).exec();
      yield object.remove();
      return {message: `Removed ${req.params.id}`}
    })
    .then((data)=>res.json(data))
    .catch((err)=>res.json(err));
  };
}

module.exports = Controller
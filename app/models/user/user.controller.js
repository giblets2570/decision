var Controller = require('../../utils/controller');

module.exports = function (User) {
	class UserController extends Controller {
		constructor(){
			super(User);
		}
	}

	return UserController;
}
var abstractActions = function() {

	abstractActions.prototype.waitForElement = function(elem, waitTime) {

		waitTime = waitTime || 2000;
		var EC = protractor.ExpectedConditions;
		var deferred = protractor.promise.defer();

		browser.wait(EC.visibilityOf(elem), waitTime).then(function() {
			deferred.fulfill(elem);
			//logging the element Text
			elem.getText().then(function(value){
				console.log('Identified the element :' + value );
			});
			
		}, function(err) {
			deferred.reject(err);
			console.log('Element is not found');
		});
		return deferred.promise;
	};

	abstractActions.prototype.clickElement = function(elem, waitTime) {
		waitTime = waitTime || 2000;

		this.waitForElement(elem, waitTime).then(function success(elem) {
			elem.click();
			console.log('Element clicked ');
		}, function error(reason) {
			throw new Error('No such Element exception');
		});
	};

	abstractActions.prototype.setText = function(elem, text, waitTime) {
		waitTime = waitTime || 2000;

		this.waitForElement(elem, waitTime).then(function success(elem) {
			elem.sendKeys(text);
			console.log('Text ' + text + ' entered ');
		}, function error(reason) {
			throw new Error('No such Element exception');
		});
	};

	abstractActions.prototype.clearText = function(elem, waitTime) {
		waitTime = waitTime || 2000;

		this.waitForElement(elem, waitTime).then(function success(elem) {
			elem.clear();
			console.log('Text cleared ');
		}, function error(reason) {
			throw new Error('No such Element exception');
		});
	};

};
module.exports = new abstractActions();

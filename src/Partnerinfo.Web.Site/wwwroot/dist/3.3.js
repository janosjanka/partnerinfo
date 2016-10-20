webpackJsonp([3],{

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) János Janka. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
	"use strict";
	var ko = __webpack_require__(20);
	var koValidation = __webpack_require__(21);
	var account_1 = __webpack_require__(46);
	/** Used to log in a user to the system. */
	var LoginViewModel = (function () {
	    function LoginViewModel(params) {
	        if (params === void 0) { params = {}; }
	        this.service = params.service || account_1.AccountService.default;
	        this.email = ko.observable(params.options && params.options.email)
	            .extend({
	            displayName: "shared:account.login.email",
	            description: "shared:account.login.emailDescription",
	            required: {
	                message: "{0}",
	                params: ko.i18n.t("shared:account.login.emailRequired")
	            }
	        });
	        this.password = ko.observable(params.options && params.options.password)
	            .extend({
	            displayName: "shared:account.login.password",
	            description: "shared:account.login.passwordDescription",
	            required: {
	                message: "{0}",
	                params: ko.i18n.t("shared:account.login.passwordRequired")
	            }
	        });
	        this.validationErrors = koValidation.group(this);
	    }
	    /** Submits login data. */
	    LoginViewModel.prototype.submit = function () {
	        this.validate() && this.service.login(this.toObject());
	    };
	    Object.defineProperty(LoginViewModel.prototype, "isValid", {
	        /** Gets a value indicating whether this object is valid. */
	        get: function () {
	            return this.validationErrors().length === 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** Validates this object and returns true if that is valid. */
	    LoginViewModel.prototype.validate = function () {
	        this.validationErrors.showAllMessages();
	        return this.isValid;
	    };
	    /** Serializes this object to a native JS object. */
	    LoginViewModel.prototype.toObject = function () {
	        return {
	            email: this.email(),
	            password: this.password()
	        };
	    };
	    return LoginViewModel;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    viewModel: LoginViewModel,
	    template: __webpack_require__(49)
	};


/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) János Janka. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
	"use strict";
	var core_1 = __webpack_require__(47);
	/** This class is the entry point for Account Management. */
	var AccountService = (function () {
	    function AccountService() {
	    }
	    /** Logs in using an authentication provider as a HTTP POST operation. */
	    AccountService.prototype.login = function (model) {
	        return core_1.http({
	            path: "account/login",
	            method: "post",
	            params: model
	        });
	    };
	    /** Registers a new account as a HTTP POST operation. */
	    AccountService.prototype.register = function (model) {
	        return core_1.http({
	            path: "account/register",
	            method: "post",
	            params: model
	        });
	    };
	    /** Unregisters an existing account as a HTTP POST operation. */
	    AccountService.prototype.unregister = function (model) {
	        return core_1.http({
	            path: "account/unregister",
	            method: "post",
	            params: model
	        });
	    };
	    /** A static instance of the service. This field is read-only. */
	    AccountService.default = new AccountService();
	    return AccountService;
	}());
	exports.AccountService = AccountService;


/***/ },

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) János Janka. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
	"use strict";
	var es6_promise_1 = __webpack_require__(48);
	function noop() { }
	;
	var httpRoute = "/api";
	/**
	 * The method PI.api() lets you make calls to the API.
	 *
	 * @param options A set of key/value pairs that configure a new HTTP request.
	 */
	function http(options) {
	    var req;
	    var canceled = false;
	    return new es6_promise_1.Promise(function (resolve, reject) {
	        req = new XMLHttpRequest();
	        req.onreadystatechange = function () {
	            if (canceled) {
	                req.onreadystatechange = noop;
	                return;
	            }
	            if (req.readyState === 4) {
	                if (req.status >= 200 && req.status < 300) {
	                    req.responseText ? resolve(JSON.parse(req.responseText)) : resolve();
	                }
	                else {
	                    reject({
	                        status: req.status
	                    });
	                }
	                req.onreadystatechange = noop;
	            }
	        };
	        req.open(options.method || "get", httpRoute + "/" + options.path, true);
	        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
	        options.params ? req.send(JSON.stringify(options.params)) : req.send();
	    })
	        .then(undefined, function (reason) {
	        req.onreadystatechange = noop;
	        canceled = true;
	        req.abort();
	    });
	}
	exports.http = http;


/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(23);

/***/ },

/***/ 49:
/***/ function(module, exports) {

	module.exports = "<form class=\"form-horizontal\" data-bind=\"submit: submit\">\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-4 control-label\" for=\"login-email\" data-bind=\"text: email.displayName\"></label>\r\n        <div class=\"col-md-8\">\r\n            <input class=\"form-control\" id=\"login-email\" type=\"email\" name=\"email\" data-bind=\"value: email, attr: { placeholder: email.placeholder }\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-4 control-label\" for=\"login-password\" data-bind=\"text: password.displayName\"></label>\r\n        <div class=\"col-md-8\">\r\n            <input class=\"form-control\" id=\"login-password\" type=\"password\" name=\"password\" data-bind=\"value: password, attr: { placeholder: password.placeholder }\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group text-center\">\r\n        <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\r\n    </div>\r\n</form>"

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvaWRlbnRpdHkvbG9naW4udHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3NyYy9zZXJ2aWNlcy9pZGVudGl0eS9hY2NvdW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zcmMvc2VydmljZXMvY29yZS50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2VzNi1wcm9taXNlL2Rpc3QvZXM2LXByb21pc2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIGJvb3RzdHJhcF9iN2E3ZGFhYTE2NjVkZGQ0YTI2NiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvaWRlbnRpdHkvbG9naW4uaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFnQyxhQUFhO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQixFQUFFO0FBQzdCO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQixFQUFFO0FBQzdCO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRCwrQ0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBK0Q7QUFDL0Q7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7QUM1Q0EsK0M7Ozs7Ozs7QUNBQSw0WUFBMlksaUNBQWlDLG1YQUFtWCxvQ0FBb0MsMEwiLCJmaWxlIjoiMy4zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBKw6Fub3MgSmFua2EuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cInVzZSBzdHJpY3RcIjtcclxudmFyIGtvID0gcmVxdWlyZShcImtub2Nrb3V0XCIpO1xyXG52YXIga29WYWxpZGF0aW9uID0gcmVxdWlyZShcImtub2Nrb3V0LnZhbGlkYXRpb25cIik7XHJcbnZhciBhY2NvdW50XzEgPSByZXF1aXJlKFwiLi4vLi4vc2VydmljZXMvaWRlbnRpdHkvYWNjb3VudFwiKTtcclxuLyoqIFVzZWQgdG8gbG9nIGluIGEgdXNlciB0byB0aGUgc3lzdGVtLiAqL1xyXG52YXIgTG9naW5WaWV3TW9kZWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTG9naW5WaWV3TW9kZWwocGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSB7IHBhcmFtcyA9IHt9OyB9XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gcGFyYW1zLnNlcnZpY2UgfHwgYWNjb3VudF8xLkFjY291bnRTZXJ2aWNlLmRlZmF1bHQ7XHJcbiAgICAgICAgdGhpcy5lbWFpbCA9IGtvLm9ic2VydmFibGUocGFyYW1zLm9wdGlvbnMgJiYgcGFyYW1zLm9wdGlvbnMuZW1haWwpXHJcbiAgICAgICAgICAgIC5leHRlbmQoe1xyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJzaGFyZWQ6YWNjb3VudC5sb2dpbi5lbWFpbFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJzaGFyZWQ6YWNjb3VudC5sb2dpbi5lbWFpbERlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcInswfVwiLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBrby5pMThuLnQoXCJzaGFyZWQ6YWNjb3VudC5sb2dpbi5lbWFpbFJlcXVpcmVkXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkID0ga28ub2JzZXJ2YWJsZShwYXJhbXMub3B0aW9ucyAmJiBwYXJhbXMub3B0aW9ucy5wYXNzd29yZClcclxuICAgICAgICAgICAgLmV4dGVuZCh7XHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcInNoYXJlZDphY2NvdW50LmxvZ2luLnBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcInNoYXJlZDphY2NvdW50LmxvZ2luLnBhc3N3b3JkRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiezB9XCIsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IGtvLmkxOG4udChcInNoYXJlZDphY2NvdW50LmxvZ2luLnBhc3N3b3JkUmVxdWlyZWRcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9ycyA9IGtvVmFsaWRhdGlvbi5ncm91cCh0aGlzKTtcclxuICAgIH1cclxuICAgIC8qKiBTdWJtaXRzIGxvZ2luIGRhdGEuICovXHJcbiAgICBMb2dpblZpZXdNb2RlbC5wcm90b3R5cGUuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGUoKSAmJiB0aGlzLnNlcnZpY2UubG9naW4odGhpcy50b09iamVjdCgpKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTG9naW5WaWV3TW9kZWwucHJvdG90eXBlLCBcImlzVmFsaWRcIiwge1xyXG4gICAgICAgIC8qKiBHZXRzIGEgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgb2JqZWN0IGlzIHZhbGlkLiAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uRXJyb3JzKCkubGVuZ3RoID09PSAwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqIFZhbGlkYXRlcyB0aGlzIG9iamVjdCBhbmQgcmV0dXJucyB0cnVlIGlmIHRoYXQgaXMgdmFsaWQuICovXHJcbiAgICBMb2dpblZpZXdNb2RlbC5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JzLnNob3dBbGxNZXNzYWdlcygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQ7XHJcbiAgICB9O1xyXG4gICAgLyoqIFNlcmlhbGl6ZXMgdGhpcyBvYmplY3QgdG8gYSBuYXRpdmUgSlMgb2JqZWN0LiAqL1xyXG4gICAgTG9naW5WaWV3TW9kZWwucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsKCksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkKClcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBMb2dpblZpZXdNb2RlbDtcclxufSgpKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB7XHJcbiAgICB2aWV3TW9kZWw6IExvZ2luVmlld01vZGVsLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2xvZ2luLmh0bWxcIilcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0NsaWVudEFwcC9zcmMvY29tcG9uZW50cy9pZGVudGl0eS9sb2dpbi50c1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDNcbiAqKi8iLCIvLyBDb3B5cmlnaHQgKGMpIErDoW5vcyBKYW5rYS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblwidXNlIHN0cmljdFwiO1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIi4uL2NvcmVcIik7XHJcbi8qKiBUaGlzIGNsYXNzIGlzIHRoZSBlbnRyeSBwb2ludCBmb3IgQWNjb3VudCBNYW5hZ2VtZW50LiAqL1xyXG52YXIgQWNjb3VudFNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQWNjb3VudFNlcnZpY2UoKSB7XHJcbiAgICB9XHJcbiAgICAvKiogTG9ncyBpbiB1c2luZyBhbiBhdXRoZW50aWNhdGlvbiBwcm92aWRlciBhcyBhIEhUVFAgUE9TVCBvcGVyYXRpb24uICovXHJcbiAgICBBY2NvdW50U2VydmljZS5wcm90b3R5cGUubG9naW4gPSBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgICAgICByZXR1cm4gY29yZV8xLmh0dHAoe1xyXG4gICAgICAgICAgICBwYXRoOiBcImFjY291bnQvbG9naW5cIixcclxuICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICAgICAgcGFyYW1zOiBtb2RlbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBSZWdpc3RlcnMgYSBuZXcgYWNjb3VudCBhcyBhIEhUVFAgUE9TVCBvcGVyYXRpb24uICovXHJcbiAgICBBY2NvdW50U2VydmljZS5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgICAgICByZXR1cm4gY29yZV8xLmh0dHAoe1xyXG4gICAgICAgICAgICBwYXRoOiBcImFjY291bnQvcmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICAgICAgcGFyYW1zOiBtb2RlbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBVbnJlZ2lzdGVycyBhbiBleGlzdGluZyBhY2NvdW50IGFzIGEgSFRUUCBQT1NUIG9wZXJhdGlvbi4gKi9cclxuICAgIEFjY291bnRTZXJ2aWNlLnByb3RvdHlwZS51bnJlZ2lzdGVyID0gZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvcmVfMS5odHRwKHtcclxuICAgICAgICAgICAgcGF0aDogXCJhY2NvdW50L3VucmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICAgICAgcGFyYW1zOiBtb2RlbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBBIHN0YXRpYyBpbnN0YW5jZSBvZiB0aGUgc2VydmljZS4gVGhpcyBmaWVsZCBpcyByZWFkLW9ubHkuICovXHJcbiAgICBBY2NvdW50U2VydmljZS5kZWZhdWx0ID0gbmV3IEFjY291bnRTZXJ2aWNlKCk7XHJcbiAgICByZXR1cm4gQWNjb3VudFNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQWNjb3VudFNlcnZpY2UgPSBBY2NvdW50U2VydmljZTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0NsaWVudEFwcC9zcmMvc2VydmljZXMvaWRlbnRpdHkvYWNjb3VudC50c1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDNcbiAqKi8iLCIvLyBDb3B5cmlnaHQgKGMpIErDoW5vcyBKYW5rYS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblwidXNlIHN0cmljdFwiO1xyXG52YXIgZXM2X3Byb21pc2VfMSA9IHJlcXVpcmUoXCJlczYtcHJvbWlzZVwiKTtcclxuZnVuY3Rpb24gbm9vcCgpIHsgfVxyXG47XHJcbnZhciBodHRwUm91dGUgPSBcIi9hcGlcIjtcclxuLyoqXHJcbiAqIFRoZSBtZXRob2QgUEkuYXBpKCkgbGV0cyB5b3UgbWFrZSBjYWxscyB0byB0aGUgQVBJLlxyXG4gKlxyXG4gKiBAcGFyYW0gb3B0aW9ucyBBIHNldCBvZiBrZXkvdmFsdWUgcGFpcnMgdGhhdCBjb25maWd1cmUgYSBuZXcgSFRUUCByZXF1ZXN0LlxyXG4gKi9cclxuZnVuY3Rpb24gaHR0cChvcHRpb25zKSB7XHJcbiAgICB2YXIgcmVxO1xyXG4gICAgdmFyIGNhbmNlbGVkID0gZmFsc2U7XHJcbiAgICByZXR1cm4gbmV3IGVzNl9wcm9taXNlXzEuUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGNhbmNlbGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gbm9vcDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVxLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxLnJlc3BvbnNlVGV4dCA/IHJlc29sdmUoSlNPTi5wYXJzZShyZXEucmVzcG9uc2VUZXh0KSkgOiByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHJlcS5zdGF0dXNcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlcS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBub29wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXEub3BlbihvcHRpb25zLm1ldGhvZCB8fCBcImdldFwiLCBodHRwUm91dGUgKyBcIi9cIiArIG9wdGlvbnMucGF0aCwgdHJ1ZSk7XHJcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIpO1xyXG4gICAgICAgIG9wdGlvbnMucGFyYW1zID8gcmVxLnNlbmQoSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5wYXJhbXMpKSA6IHJlcS5zZW5kKCk7XHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHVuZGVmaW5lZCwgZnVuY3Rpb24gKHJlYXNvbikge1xyXG4gICAgICAgIHJlcS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBub29wO1xyXG4gICAgICAgIGNhbmNlbGVkID0gdHJ1ZTtcclxuICAgICAgICByZXEuYWJvcnQoKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuaHR0cCA9IGh0dHA7XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvc3JjL3NlcnZpY2VzL2NvcmUudHNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygzKSkoMjMpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2VzNi1wcm9taXNlL2Rpc3QvZXM2LXByb21pc2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIGJvb3RzdHJhcF9iN2E3ZGFhYTE2NjVkZGQ0YTI2NlxuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgZGF0YS1iaW5kPVxcXCJzdWJtaXQ6IHN1Ym1pdFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtNCBjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImxvZ2luLWVtYWlsXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6IGVtYWlsLmRpc3BsYXlOYW1lXFxcIj48L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLThcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibG9naW4tZW1haWxcXFwiIHR5cGU9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTogZW1haWwsIGF0dHI6IHsgcGxhY2Vob2xkZXI6IGVtYWlsLnBsYWNlaG9sZGVyIH1cXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtNCBjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImxvZ2luLXBhc3N3b3JkXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6IHBhc3N3b3JkLmRpc3BsYXlOYW1lXFxcIj48L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLThcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibG9naW4tcGFzc3dvcmRcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTogcGFzc3dvcmQsIGF0dHI6IHsgcGxhY2Vob2xkZXI6IHBhc3N3b3JkLnBsYWNlaG9sZGVyIH1cXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPlN1Ym1pdDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL3NyYy9jb21wb25lbnRzL2lkZW50aXR5L2xvZ2luLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==
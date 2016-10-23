/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/spec/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackMissingModule() { throw new Error("Cannot find module \"jasmine\""); }());
	__webpack_require__(1);
	module.exports = __webpack_require__(5);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2)
	__webpack_require__(3)
	__webpack_require__(4)


/***/ },
/* 2 */
/***/ function(module, exports) {

	(function() {
	    if (! jasmine) {
	        throw new Exception("jasmine library does not exist in global namespace!");
	    }

	    /**
	     * Basic reporter that outputs spec results to the browser console.
	     * Useful if you need to test an html page and don't want the TrivialReporter
	     * markup mucking things up.
	     *
	     * Usage:
	     *
	     * jasmine.getEnv().addReporter(new jasmine.ConsoleReporter());
	     * jasmine.getEnv().execute();
	     */
	    var ConsoleReporter = function() {
	        this.started = false;
	        this.finished = false;
	    };

	    ConsoleReporter.prototype = {
	        reportRunnerResults: function(runner) {
	            if (this.hasGroupedConsole()) {
	                var suites = runner.suites();
	                startGroup(runner.results(), 'tests');
	                for (var i in suites) {
	                    if (!suites[i].parentSuite) {
	                        suiteResults(suites[i]);
	                    }
	                }
	                console.groupEnd();
	            }
	            else {
	                var dur = (new Date()).getTime() - this.start_time;
	                var failed = this.executed_specs - this.passed_specs;
	                var spec_str = this.executed_specs + (this.executed_specs === 1 ? " spec, " : " specs, ");
	                var fail_str = failed + (failed === 1 ? " failure in " : " failures in ");

	                this.log("Runner Finished.");
	                this.log(spec_str + fail_str + (dur/1000) + "s.");
	            }
	            this.finished = true;
	        },

	        hasGroupedConsole: function() {
	            var console = jasmine.getGlobal().console;
	            return console && console.info && console.warn && console.group && console.groupEnd && console.groupCollapsed;
	        },

	        reportRunnerStarting: function(runner) {
	            this.started = true;
	            if (!this.hasGroupedConsole()) {
	                this.start_time = (new Date()).getTime();
	                this.executed_specs = 0;
	                this.passed_specs = 0;
	                this.log("Runner Started.");
	            }
	        },

	        reportSpecResults: function(spec) {
	            if (!this.hasGroupedConsole()) {
	                var resultText = "Failed.";

	                if (spec.results().passed()) {
	                    this.passed_specs++;
	                    resultText = "Passed.";
	                }

	                this.log(resultText);
	            }
	        },

	        reportSpecStarting: function(spec) {
	            if (!this.hasGroupedConsole()) {
	                this.executed_specs++;
	                this.log(spec.suite.description + ' : ' + spec.description + ' ... ');
	            }
	        },

	        reportSuiteResults: function(suite) {
	            if (!this.hasGroupedConsole()) {
	                var results = suite.results();
	                this.log(suite.description + ": " + results.passedCount + " of " + results.totalCount + " passed.");
	            }
	        },

	        log: function(str) {
	            var console = jasmine.getGlobal().console;
	            if (console && console.log) {
	                console.log(str);
	            }
	        }
	    };

	    function suiteResults(suite) {
	        var results = suite.results();
	        startGroup(results, suite.description);
	        var specs = suite.specs();
	        for (var i in specs) {
	            if (specs.hasOwnProperty(i)) {
	                specResults(specs[i]);
	            }
	        }
	        var suites = suite.suites();
	        for (var j in suites) {
	            if (suites.hasOwnProperty(j)) {
	                suiteResults(suites[j]);
	            }
	        }
	        console.groupEnd();
	    }

	    function specResults(spec) {
	        var results = spec.results();
	        startGroup(results, spec.description);
	        var items = results.getItems();
	        for (var k in items) {
	            if (items.hasOwnProperty(k)) {
	                itemResults(items[k]);
	            }
	        }
	        console.groupEnd();
	    }

	    function itemResults(item) {
	        if (item.passed && !item.passed()) {
	            console.warn({actual:item.actual,expected: item.expected});
	            item.trace.message = item.matcherName;
	            console.error(item.trace);
	        } else {
	            console.info('Passed');
	        }
	    }

	    function startGroup(results, description) {
	        var consoleFunc = (results.passed() && console.groupCollapsed) ? 'groupCollapsed' : 'group';
	        console[consoleFunc](description + ' (' + results.passedCount + '/' + results.totalCount + ' passed, ' + results.failedCount + ' failures)');
	    }

	    // export public
	    jasmine.ConsoleReporter = ConsoleReporter;
	})();


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	(function() {

	    if (! jasmine) {
	        throw new Exception("jasmine library does not exist in global namespace!");
	    }

	    function elapsed(startTime, endTime) {
	        return (endTime - startTime)/1000;
	    }

	    function ISODateString(d) {
	        function pad(n) { return n < 10 ? '0'+n : n; }

	        return d.getFullYear() + '-' +
	            pad(d.getMonth()+1) + '-' +
	            pad(d.getDate()) + 'T' +
	            pad(d.getHours()) + ':' +
	            pad(d.getMinutes()) + ':' +
	            pad(d.getSeconds());
	    }

	    function trim(str) {
	        return str.replace(/^\s+/, "" ).replace(/\s+$/, "" );
	    }

	    function escapeInvalidXmlChars(str) {
	        return str.replace(/\&/g, "&amp;")
	            .replace(/</g, "&lt;")
	            .replace(/\>/g, "&gt;")
	            .replace(/\"/g, "&quot;")
	            .replace(/\'/g, "&apos;");
	    }

	    /**
	     * Generates JUnit XML for the given spec run.
	     * Allows the test results to be used in java based CI
	     * systems like CruiseControl and Hudson.
	     *
	     * @param {string} savePath where to save the files
	     * @param {boolean} consolidate whether to save nested describes within the
	     *                  same file as their parent; default: true
	     * @param {boolean} useDotNotation whether to separate suite names with
	     *                  dots rather than spaces (ie "Class.init" not
	     *                  "Class init"); default: true
	     */
	    var JUnitXmlReporter = function(savePath, consolidate, useDotNotation) {
	        this.savePath = savePath || '';
	        this.consolidate = consolidate === jasmine.undefined ? true : consolidate;
	        this.useDotNotation = useDotNotation === jasmine.undefined ? true : useDotNotation;
	    };
	    JUnitXmlReporter.finished_at = null; // will be updated after all files have been written

	    JUnitXmlReporter.prototype = {
	        reportSpecStarting: function(spec) {
	            spec.startTime = new Date();

	            if (!spec.suite.startTime) {
	                spec.suite.startTime = spec.startTime;
	            }
	        },

	        reportSpecResults: function(spec) {
	            var results = spec.results();
	            spec.didFail = !results.passed();
	            spec.duration = elapsed(spec.startTime, new Date());
	            spec.output = '<testcase classname="' + this.getFullName(spec.suite) +
	                '" name="' + escapeInvalidXmlChars(spec.description) + '" time="' + spec.duration + '">';

	            var failure = "";
	            var failures = 0;
	            var resultItems = results.getItems();
	            for (var i = 0; i < resultItems.length; i++) {
	                var result = resultItems[i];

	                if (result.type == 'expect' && result.passed && !result.passed()) {
	                    failures += 1;
	                    failure += (failures + ": " + escapeInvalidXmlChars(result.message) + " ");
	                }
	            }
	            if (failure) {
	                spec.output += "<failure>" + trim(failure) + "</failure>";
	            }
	            spec.output += "</testcase>";
	        },

	        reportSuiteResults: function(suite) {
	            var results = suite.results();
	            var specs = suite.specs();
	            var specOutput = "";
	            // for JUnit results, let's only include directly failed tests (not nested suites')
	            var failedCount = 0;

	            suite.status = results.passed() ? 'Passed.' : 'Failed.';
	            if (results.totalCount === 0) { // todo: change this to check results.skipped
	                suite.status = 'Skipped.';
	            }

	            // if a suite has no (active?) specs, reportSpecStarting is never called
	            // and thus the suite has no startTime -- account for that here
	            suite.startTime = suite.startTime || new Date();
	            suite.duration = elapsed(suite.startTime, new Date());

	            for (var i = 0; i < specs.length; i++) {
	                failedCount += specs[i].didFail ? 1 : 0;
	                specOutput += "\n  " + specs[i].output;
	            }
	            suite.output = '\n<testsuite name="' + this.getFullName(suite) +
	                '" errors="0" tests="' + specs.length + '" failures="' + failedCount +
	                '" time="' + suite.duration + '" timestamp="' + ISODateString(suite.startTime) + '">';
	            suite.output += specOutput;
	            suite.output += "\n</testsuite>";
	        },

	        reportRunnerResults: function(runner) {
	            var suites = runner.suites();
	            for (var i = 0; i < suites.length; i++) {
	                var suite = suites[i];
	                var fileName = 'TEST-' + this.getFullName(suite, true) + '.xml';
	                var output = '<?xml version="1.0" encoding="UTF-8" ?>';
	                // if we are consolidating, only write out top-level suites
	                if (this.consolidate && suite.parentSuite) {
	                    continue;
	                }
	                else if (this.consolidate) {
	                    output += "\n<testsuites>";
	                    output += this.getNestedOutput(suite);
	                    output += "\n</testsuites>";
	                    this.writeFile(this.savePath + fileName, output);
	                }
	                else {
	                    output += suite.output;
	                    this.writeFile(this.savePath + fileName, output);
	                }
	            }
	            // When all done, make it known on JUnitXmlReporter
	            JUnitXmlReporter.finished_at = (new Date()).getTime();
	        },

	        getNestedOutput: function(suite) {
	            var output = suite.output;
	            for (var i = 0; i < suite.suites().length; i++) {
	                output += this.getNestedOutput(suite.suites()[i]);
	            }
	            return output;
	        },

	        writeFile: function(filename, text) {
	            // Rhino
	            try {
	                var out = new java.io.BufferedWriter(new java.io.FileWriter(filename));
	                out.write(text);
	                out.close();
	                return;
	            } catch (e) {}
	            // PhantomJS, via a method injected by phantomjs-testrunner.js
	            try {
	                __phantom_writeFile(filename, text);
	                return;
	            } catch (f) {}
	            // Node.js
	            try {
	                var fs = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	                var fd = fs.openSync(filename, "w");
	                fs.writeSync(fd, text, 0);
	                fs.closeSync(fd);
	                return;
	            } catch (g) {}
	        },

	        getFullName: function(suite, isFilename) {
	            var fullName;
	            if (this.useDotNotation) {
	                fullName = suite.description;
	                for (var parentSuite = suite.parentSuite; parentSuite; parentSuite = parentSuite.parentSuite) {
	                    fullName = parentSuite.description + '.' + fullName;
	                }
	            }
	            else {
	                fullName = suite.getFullName();
	            }

	            // Either remove or escape invalid XML characters
	            if (isFilename) {
	                return fullName.replace(/[^\w]/g, "");
	            }
	            return escapeInvalidXmlChars(fullName);
	        },

	        log: function(str) {
	            var console = jasmine.getGlobal().console;

	            if (console && console.log) {
	                console.log(str);
	            }
	        }
	    };

	    // export public
	    jasmine.JUnitXmlReporter = JUnitXmlReporter;
	})();


/***/ },
/* 4 */
/***/ function(module, exports) {

	(function() {
	    if (! jasmine) {
	        throw new Exception("jasmine library does not exist in global namespace!");
	    }

	    /**
	     * Basic reporter that outputs spec results to for the Teamcity build system
	     *
	     * Usage:
	     *
	     * jasmine.getEnv().addReporter(new jasmine.TeamcityReporter());
	     * jasmine.getEnv().execute();
	     */
	    var TeamcityReporter = function() {
	        this.started = false;
	        this.finished = false;
	    };

	    TeamcityReporter.prototype = {
	        reportRunnerResults: function(runner) { },

	        reportRunnerStarting: function(runner) { },

	        reportSpecResults: function(spec) { },

	        reportSpecStarting: function(spec) { },

	        reportSuiteResults: function(suite) {
	            var results = suite.results();
	            var path = [];
	            while(suite) {
	                path.unshift(suite.description);
	                suite = suite.parentSuite;
	            }
	            var description = path.join(' ');

	            this.log("##teamcity[testSuiteStarted name='" + this.escapeTeamcityString(description) + "']");

	            var outerThis = this;
	            var eachSpecFn = function(spec){
	                if (spec.description) {
	                    outerThis.log("##teamcity[testStarted name='" + outerThis.escapeTeamcityString(spec.description) + "' captureStandardOutput='true']");
	                    var specResultFn = function(result){
	                        if (!result.passed_) {
	                            outerThis.log("##teamcity[testFailed name='" + outerThis.escapeTeamcityString(spec.description) + "' message='|[FAILED|]' details='" + outerThis.escapeTeamcityString(result.trace.stack) + "']");
	                        }
	                    };

	                    for (var j = 0, jlen = spec.items_.length; j < jlen; j++) {
	                        specResultFn(spec.items_[j]);
	                    }
	                    outerThis.log("##teamcity[testFinished name='" + outerThis.escapeTeamcityString(spec.description) + "']");
	                }
	            };
	            for (var i = 0, ilen = results.items_.length; i < ilen; i++) {
	                eachSpecFn(results.items_[i]);
	            }



	            this.log("##teamcity[testSuiteFinished name='" + outerThis.escapeTeamcityString(description) + "']");
	        },

	        log: function(str) {
	            var console = jasmine.getGlobal().console;
	            if (console && console.log) {
	                console.log(str);
	            }
	        },

	        hasGroupedConsole: function() {
	            var console = jasmine.getGlobal().console;
	            return console && console.info && console.warn && console.group && console.groupEnd && console.groupCollapsed;
	        },

	        escapeTeamcityString: function(message) {
	            if(!message) {
	                return "";
	            }

	            return message.replace(/\|/g, "||")
	                          .replace(/\'/g, "|'")
	                          .replace(/\n/g, "|n")
	                          .replace(/\r/g, "|r")
	                          .replace(/\u0085/g, "|x")
	                          .replace(/\u2028/g, "|l")
	                          .replace(/\u2029/g, "|p")
	                          .replace(/\[/g, "|[")
	                          .replace(/]/g, "|]");
	        }
	    };

	    function suiteResults(suite) {
	        console.group(suite.description);
	        var specs = suite.specs();
	        for (var i in specs) {
	            if (specs.hasOwnProperty(i)) {
	                specResults(specs[i]);
	            }
	        }
	        var suites = suite.suites();
	        for (var j in suites) {
	            if (suites.hasOwnProperty(j)) {
	                suiteResults(suites[j]);
	            }
	        }
	        console.groupEnd();
	    }

	    function specResults(spec) {
	        var results = spec.results();
	        if (results.passed() && console.groupCollapsed) {
	            console.groupCollapsed(spec.description);
	        } else {
	            console.group(spec.description);
	        }
	        var items = results.getItems();
	        for (var k in items) {
	            if (items.hasOwnProperty(k)) {
	                itemResults(items[k]);
	            }
	        }
	        console.groupEnd();
	    }

	    function itemResults(item) {
	        if (item.passed && !item.passed()) {
	            console.warn({actual:item.actual,expected: item.expected});
	            item.trace.message = item.matcherName;
	            console.error(item.trace);
	        } else {
	            console.info('Passed');
	        }
	    }

	    // export public
	    jasmine.TeamcityReporter = TeamcityReporter;
	})();



/***/ },
/* 5 */
/***/ function(module, exports) {

	// Copyright (c) János Janka. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
	describe("A suite", function () {
	    it("contains spec with an expectation", function () {
	        expect(true).toBe(true);
	    });
	});


/***/ }
/******/ ]);
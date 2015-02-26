var fs = require('fs');
var util = require('util');
var path = require('path');

function loadJson(pathName) {
	if (fs.existsSync(pathName)) {
		var text = fs.readFileSync(pathName, "utf-8");
		return JSON.parse(text);
	} else {
		return {};
	}
}

function timeDiff(t) {
	return Math.floor((t[0] * 1e9 + t[1])/1000);
}

var startTime;
var j;
var endTime;
var stats, filename;

var text, t1, t2;

filename = "../ilib-sf/js/src/ilib-ut.js";

startTime = process.hrtime();
text = fs.readFileSync(filename, "utf-8");
endTime = process.hrtime(startTime);

t1 = timeDiff(endTime);

util.print("objects ilib-ut.js: took " + t1 + " microseconds to load.\n");

startTime = process.hrtime();
obj = eval(text);
endTime = process.hrtime(startTime);

t2 = timeDiff(endTime);

util.print("objects ilib-ut.js: took " + t2 + " microseconds to parse.\n");
util.print("objects ilib-ut.js: together, that is " + (t1+t2) + " microseconds.\n");


filename = "js/output/js/ilib-ut.js";

startTime = process.hrtime();
text = fs.readFileSync(filename, "utf-8");
endTime = process.hrtime(startTime);

t1 = timeDiff(endTime);

util.print("strings ilib-ut.js: took " + t1 + " microseconds to load.\n");

startTime = process.hrtime();
obj = eval(text);
endTime = process.hrtime(startTime);

t2 = timeDiff(endTime);

util.print("strings ilib-ut.js: took " + t2 + " microseconds to parse.\n");
util.print("objects ilib-ut.js: together, that is " + (t1+t2) + " microseconds.\n");

filename = "../ilib-sf/js/src/ilib-ut-compiled.js";

startTime = process.hrtime();
text = fs.readFileSync(filename, "utf-8");
endTime = process.hrtime(startTime);

t1 = timeDiff(endTime);

util.print("objects ilib-ut-compiled.js: took " + t1 + " microseconds to load.\n");

startTime = process.hrtime();
obj = eval(text);
endTime = process.hrtime(startTime);

t2 = timeDiff(endTime);

util.print("objects ilib-ut-compiled.js: took " + t2 + " microseconds to parse.\n");
util.print("objects ilib-ut-compiled.js: together, that is " + (t1+t2) + " microseconds.\n");


filename = "js/output/js/ilib-ut-compiled.js";

startTime = process.hrtime();
text = fs.readFileSync(filename, "utf-8");
endTime = process.hrtime(startTime);

t1 = timeDiff(endTime);

util.print("strings ilib-ut-compiled.js: took " + t1 + " microseconds to load.\n");

startTime = process.hrtime();
obj = eval(text);
endTime = process.hrtime(startTime);

t2 = timeDiff(endTime);

util.print("strings ilib-ut-compiled.js: took " + t2 + " microseconds to parse.\n");
util.print("objects ilib-ut-compiled.js: together, that is " + (t1+t2) + " microseconds.\n");

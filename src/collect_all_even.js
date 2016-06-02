'use strict';

function collect_all_even(collection) {
	var test1 = /[1-9]*[02468]{1}$/;
	var c = new Array();
	var i = 0;
	for (i = 0; i < collection.length; i++)
	{
		if (test1.test(collection[i]))
		{
			c.push(collection[i]);
		}
	}
	return c;
}

module.exports = collect_all_even;
